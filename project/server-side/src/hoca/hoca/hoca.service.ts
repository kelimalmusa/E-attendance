import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Hoca } from "src/models/hoca";
import * as lodash from "lodash";
@Injectable()
export class HocaService {
  constructor(private dbs: DatabaseService) {}
  insertHoca(newHoca: Hoca): Promise<Hoca> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into hoca (hoca_name,hoca_surname,hoca_title,hoca_username,hoca_email,hoca_password) values ($1,$2,$3,$4,$5,$6)",
          [
            newHoca.hoca_name,
            newHoca.hoca_surname,
            newHoca.hoca_title,
            newHoca.username,
            newHoca.email,
            newHoca.password
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
  getHocaById(hocaIdList: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = hocaIdList.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(`select * from hoca where hoca_id in (${dollars})`, hocaIdList)
        .then(result => {
          if (!result) return reject();
          console.log(result.rows);
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
        .query("select * from hoca")
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
  deleteHocaByName(hoca: Hoca): Promise<Hoca> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "delete from hoca where (hoca_name=$1 and hoca_surname=$2) or hoca_id=$3",
          [hoca.hoca_name, hoca.hoca_surname, hoca.hoca_id]
        );
    });
  }
}
