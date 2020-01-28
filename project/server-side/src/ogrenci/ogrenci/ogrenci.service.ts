import { Injectable, Controller } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
// import { Ogrenci } from "../../../../models/ogrenci";
type Ogrenci = any;
@Injectable()
export class OgrenciService {
  constructor(private dbs: DatabaseService) {}
  insertStudent(newOgrenci: Ogrenci): Promise<Ogrenci> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into ogrenci (ogr_no,ogr_name,ogr_username,ogr_ogrenim_turu,ogr_user_id,ogr_username)values($1,$2,$3,$4,$5,$6)",
          [
            newOgrenci.ogr_no,
            newOgrenci.ogr_name,
            newOgrenci.ogr_surname,
            newOgrenci.ogr_ogrenim_turu,
            newOgrenci.ogr_user_id,
            newOgrenci.ogr_username
          ]
        )
        .then(result => {
          if (!result || !result.rowCount) return reject();
          console.dir(result);
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  findAll(): Promise<Ogrenci> {
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
  findOgrenciById(id: number): Promise<Ogrenci> {
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
  findOgrenciByOgrNo(ogrNo: number): Promise<Ogrenci> {
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
  deleteOgrenciByOgrNo(ogrNo: number): Promise<Ogrenci> {
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
