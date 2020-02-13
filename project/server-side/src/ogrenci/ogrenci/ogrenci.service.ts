import * as lodash from "lodash";
import { Injectable, Controller, Inject, forwardRef } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Ogrenci, Ders } from "src/models/models";
import { DersService } from "src/ders/ders/ders.service";
import { YoklamaService } from "src/yoklama/yoklama/yoklama.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { rejects } from "assert";
@Injectable()
export class OgrenciService {
  tmp: Ogrenci = new Ogrenci();
  constructor(
    private dbs: DatabaseService,
    @Inject(forwardRef(() => YoklamaService)) private yokSer: YoklamaService,
    @Inject(forwardRef(() => DersService)) private dersSer: DersService,
    @Inject(forwardRef(() => TwitterService)) private twitterSer: TwitterService
  ) {
    this.tmp.ders = new Array<Ders>();
  }
  insertStudent(newOgrenci: Ogrenci): Promise<any> {
    return new Promise((resolve, reject) => {
      this.twitterSer
        .findUserId(newOgrenci.username)
        .then(result => {
          const ogr_id = result;
          if (!result) return reject();
          this.dbs
            .getPool()
            .query(
              //returnin ogr_id demek ekledikten sonra serial olan ogr_id değerinin döndür demektir
              "insert into ogrenci (ogr_id,ogr_no,ogr_name,ogr_surname,ogr_ogrenim_turu,ogr_user_id,ogr_username,ogr_password,ogr_email)values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning ogr_id",
              [
                ogr_id,
                newOgrenci.ogr_no,
                newOgrenci.ogr_name,
                newOgrenci.ogr_surname,
                newOgrenci.ogr_ogrenim_turu,
                newOgrenci.ogr_user_id,
                newOgrenci.username,
                newOgrenci.password,
                newOgrenci.email
              ]
            )
            .then(result => {
              if (!result || !result.rowCount) return reject();
              const dersIdList = newOgrenci.ders.map(i => i.ders_id);
              this.yokSer.insertStudentAndDers(
                result.rows[0].ogr_id,
                dersIdList
              );
              newOgrenci.ders.forEach(element => {
                // şuan öğrenci nesnesi dersler: number dizisi içeriyor, ileri zaman da numberden Ders nesnesine çevirmek gerekebilir
                this.insertStudentsCourses(
                  result.rows[0].ogr_id,
                  element.ders_id
                );
              });
              console.dir(result);
              return resolve();
            })
            .catch(e => {
              console.error(e);
              reject();
            });
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }

  // bu fonksiyonu ders service e taşımak daha mantıklı olanilir
  insertStudentsCourses(ogrId: number, dersId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into ogrenci_kayit (ogr_id,ders_id,kayit_tarih) values ($1,$2,$3)",
          [ogrId, dersId, new Date()]
        )
        .then(result => {
          if (!result) return reject();
          console.dir(result);
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  // bu fonksiyonu ders service e taşımak daha mantıklı olanilir

  findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ogrenci")
        .then(result => {
          if (!result) return reject(); //TODO veritabanından gelen result nesnesini Ogrenci veya ilgili nesneye atamamız gerek
          if (!result.rowCount) return resolve("Veri bulunamadı");
          const ogrenciList = result.rows.map(i => i.ogr_id);
          this.dersSer.getDersByOgrencId(ogrenciList).then(dersReq => {
            const dersList = lodash.groupBy(dersReq.rows, "ogr_id");
            // console.log("dersList", dersList);
            result.rows.forEach(element => {
              element.ders = dersList[element.ogr_id];
            });
            return resolve(result.rows);
          });
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  findOgrenciByOgrId(ogrIdList: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = ogrIdList.map((_, index) => "$" + (index + 1));
      this.dbs // bura yeni yapıldı dikkatli oku ve tüm fonksiyonları buna göre yap
        .getPool()
        .query(`select * from ogrenci where ogr_id in (${dollars})`, ogrIdList)
        .then(result => {
          if (!result) return reject();
          if (!result.rowCount)
            return resolve("Girilen kriterlere göre veri bulunamadı");
          // const ogrenciIdList = result.rows.map(i => i.ogr_id);
          this.dersSer
            .getDersByOgrencId(ogrIdList)
            .then(dersReq => {
              if (dersReq.rowCount) {
                const dersList = lodash.groupBy(dersReq.rows, "ogr_id");
                result.rows.forEach(element => {
                  element.ders = dersList[element.ogr_id];
                });
                return resolve(result.rows);
              }
              resolve(result.rows);
            })
            .catch(e => {
              console.error(e);
              reject();
            });
        });
    });
  }
  // findOgrenciById(id: number): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.dbs // bura yeni yapıldı dikkatli oku ve tüm fonksiyonları buna göre yap
  //       .getPool()
  //       .query("select * from ogrenci where ogr_id =$1", [id])
  //       .then(result => {
  //         if (!result) return reject();
  //         return resolve(result.rows);
  //       })
  //       .catch(e => {
  //         console.error(e);
  //         reject();
  //       });
  //   });
  // }

  findOgrenciByOgrNo(ogrNo: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ogrenci where ogr_no =$1", [ogrNo])
        .then(async result => {
          if (!result) return reject();
          await this.dersSer
            .getDersByOgrencId([result.rows[0].ogr_id])
            .then(res => {
              this.tmp = result.rows[0];
              this.tmp.ders = res.rows;
            });
          console.log(result.rows);

          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  deleteOgrenciByOgrNo(ogrNo: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("delete from ogrenci where ogr_no=$1", [ogrNo])
        .then(result => {
          if (!result) return reject();
          console.dir(result);
          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  updateOgrenci(ogrNo: number, updatedOgr: Ogrenci): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "update ogrenci set ogr_no = $1,ogr_name=$2,ogr_surname=$3,ogr_ogrenim_turu=$4,ogr_user_id=$5,ogr_username=$6,ogr_password=$7,ogr_email=$8 where ogr_no=$9",
          [
            updatedOgr.ogr_no,
            updatedOgr.ogr_name,
            updatedOgr.ogr_surname,
            updatedOgr.ogr_ogrenim_turu,
            updatedOgr.ogr_user_id,
            updatedOgr.username,
            updatedOgr.password,
            updatedOgr.email,
            ogrNo
          ]
        )
        .then(result => {
          if (!result) return reject();
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getOgrenciByDersId(dersIdList: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = dersIdList.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(
          `select * from ogrenci inner join ogrenci_kayit on ogrenci_kayit.ders_id in (${dollars}) and ogrenci_kayit.ogr_id=ogrenci.ogr_id`,
          dersIdList
        )
        .then(result => {
          if (!result) return reject();
          return resolve(result.rows);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
