import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Ders } from "src/models/models";
import { rejects } from "assert";
import { QueryResult } from "pg";

@Injectable()
export class DersService {
  constructor(private dbs: DatabaseService) {}
  insertNewDers(newDers: Ders): Promise<Ders> {
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
          console.dir();
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  findAll(): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from ders")
        .then(result => {
          if (!result || !result.rowCount) {
            console.log("Hata Service İf te");
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
}
