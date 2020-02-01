import { Injectable, Controller } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Ogrenci } from "src/models/models";
@Injectable()
export class OgrenciService {
  constructor(private dbs: DatabaseService) {}
  insertStudent(newOgrenci: Ogrenci): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          //returnin ogr_id demek ekledikten sonra serial olan ogr_id değerinin döndür demektir
          "insert into ogrenci (ogr_no,ogr_name,ogr_surname,ogr_ogrenim_turu,ogr_user_id,ogr_username,ogr_password,ogr_email)values($1,$2,$3,$4,$5,$6,$7,$8) returning ogr_id",
          [
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
          newOgrenci.ders.forEach(element => {
            // şuan öğrenci nesnesi dersler: number dizisi içeriyor, ileri zaman da numberden Ders nesnesine çevirmek gerekebilir
            this.insertStudentsCourses(result.rows[0].ogr_id, element);
          });
          console.dir(result);
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
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
  findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ogrenci")
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
  findOgrenciById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ogrenci where ogr_id =$1", [id])
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
  findOgrenciByOgrNo(ogrNo: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ogrenci where ogr_no =$1", [ogrNo])
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
}
