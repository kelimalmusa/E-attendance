import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Ders } from "src/models/models";
import { QueryResult } from "pg";
import { HocaService } from "src/hoca/hoca/hoca.service";
import * as lodash from "lodash";
import { promises } from "dns";

@Injectable()
export class DersService {
  dersList: Ders[];
  constructor(
    private dbs: DatabaseService,
    @Inject(forwardRef(() => HocaService)) private hocaSer: HocaService
  ) {
    this.dersList = new Array<Ders>();
  }
  insertNewDers(newDers: Ders): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into ders (ders_code,ders_name,ders_sube,ders_haftalik_saat,ders_uygulama,ders_baslangic_saat,ders_hoca_id,ders_salon) values($1,$2,$3,$4,$5,$6,$7,$8)",
          [
            newDers.ders_code,
            newDers.ders_name,
            newDers.ders_sube,
            newDers.ders_haftalik_saat,
            newDers.ders_uygulama,
            newDers.ders_baslangic_saat,
            newDers.ders_hoca_id,
            newDers.ders_salon
          ]
        )
        .then(result => {
          if (!result || !result.rowCount) return reject();
          console.dir(result);
          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  updateDersByDersCode(ders: Ders, dersCode: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "update ders set ders_code=$1, ders_name=$2, ders_sube=$3,ders_haftalik_saat=$4, ders_uygulama=$5,ders_baslangic_saat=$6, ders_hoca_id=$7,ders_salon=$8 where ders_code=$9",
          [
            ders.ders_code,
            ders.ders_name,
            ders.ders_sube,
            ders.ders_haftalik_saat,
            ders.ders_uygulama,
            ders.ders_baslangic_saat,
            ders.ders_hoca_id,
            ders.ders_salon,
            dersCode
          ]
        )
        .then(result => {
          if (!result) return reject();
          resolve(result);
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
        .query("select * from ders")
        .then(result => {
          if (!result || !result.rowCount) return reject();
          const hocaIdList = result.rows.map(i => i.ders_hoca_id);
          this.hocaSer.getHocaById(hocaIdList).then(hocaRequest => {
            const hocaList = lodash.groupBy(hocaRequest.rows, "hoca_id");
            result.rows.forEach(element => {
              element.ders_hoca = hocaList[element.ders_hoca_id][0];
            });
            resolve(result.rows);
          });
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  findDersByDersCodeOrName(param: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "select * from ders where ders_code ilike $1 or ders_name ilike $1",
          ["%" + param + "%"]
        )
        .then(result => {
          if (!result) return reject();
          if (!result.rowCount)
            return resolve("Girilen kriterlere göre veri bulunamadı");
          const hocaId = [result.rows[0].ders_hoca_id];
          this.hocaSer.getHocaById(hocaId).then(res => {
            result.rows[0].ders_hoca = res.rows[0];
            return resolve(result.rows);
          });
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  deleteDersByDersCode(dersCode: string): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("delete from ders where ders_code=$1", [dersCode])
        .then(result => {
          if (!result || !result.rowCount) {
            return reject();
          }
          console.dir(result);
          resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getDersByHocaId(hocaIdList: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = hocaIdList.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(
          `select * from ders where ders_hoca_id in (${dollars})`,
          hocaIdList
        )
        .then(result => {
          if (!result) return reject();
          resolve(result.rows);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getDersById(dersId: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      if (dersId.length) {
        const dollars = dersId.map((_, index) => "$" + (index + 1));
        this.dbs
          .getPool()
          .query(`select * from ders where ders_id in (${dollars})`, dersId)
          .then(result => {
            if (!result) return reject();
            resolve(result.rows);
          })
          .catch(e => {
            console.error(e);
            reject();
          });
      }
    });
  }
  getDersIdByOgrenciId(ogrenciId: number[]) {
    return new Promise((resolve, reject) => {
      const dollars = ogrenciId.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(
          `select ders_id from ogrenci_kayit where ogrenci_id in(${dollars})`
        )
        .then(result => {
          if (!result) return reject();
          resolve(result.rows);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getDersByOgrencId(ogrenciIdList: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = ogrenciIdList.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(
          `select * from ders inner join ogrenci_kayit on ogrenci_kayit.ogr_id in (${dollars}) and ogrenci_kayit.ders_id=ders.ders_id`,
          ogrenciIdList
        )
        .then(result => {
          if (!result) return reject();
          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
