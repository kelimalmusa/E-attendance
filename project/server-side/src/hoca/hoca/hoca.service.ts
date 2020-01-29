import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { Hoca } from "src/models/hoca";
import { QueryResult } from "pg";
import { resolve } from "dns";

@Injectable()
export class HocaService {
  constructor(private dbs: DatabaseService) {}
  insertHoca(newHoca: Hoca): Promise<Hoca> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into hoca (hoca_name,hoca_surname,hoca_title) values ($1,$2,$3)",
          [newHoca.hoca_name, newHoca.hoca_surname, newHoca.hoca_title]
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
  findAll(): Promise<QueryResult> {
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
