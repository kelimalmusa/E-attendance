import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";

import * as twit from "twit";
import { promises } from "dns";
import { rejects } from "assert";

export const Twitter = new twit({
  consumer_key: "QrSELxABo1TSwl0Bpr6DV9VK4",
  consumer_secret: "yFsBhyYfVhenZwjLw5Okl2PdTWGjUH8czLGlCfnYabVlwLr8fp",
  access_token: "1259478528-FyebKFry33MmmearEhcD0Wy2ZU9ZkS9D54Gysth",
  access_token_secret: "btWJMbmDXndutbZAdVuHqP3LPJM7R5x9gFtk0JhjxiCm2",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});

@Injectable()
export class DenemeService {
  constructor(private dbs: DatabaseService) {}

  saveToDatabase(name: string, age: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("insert into deneme(name, age)values($1, $2)", [name, age])
        .then(result => {
          if (!result.rowCount) {
            return reject();
          }
          console.dir(result);
          resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }

  tt() {
    return new Promise((resolve, reject) => {
      Twitter.get("search/tweets", {
        q: "#CADOS123",
        count: 100,
        result_type: "mixed"
      })
        .then(function(result: any) {
          console.log(result.data.statuses.length);
          resolve(result.data.statuses);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  dd() {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from deneme")
        .then(result => {
          console.log(result.rows);
          resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
