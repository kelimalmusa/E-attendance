import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { QueryResult } from "pg";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { DersService } from "src/ders/ders/ders.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import * as lodash from "lodash";

@Injectable()
export class TweetService {
  dersId: number;
  constructor(
    private dbs: DatabaseService,
    private twitterService: TwitterService,
    private derSer: DersService,
    private ogrSer: OgrenciService
  ) {}
  collectTweets(hastag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.derSer.findDersByDersCodeOrName(hastag).then(result => {
        // console.log("dersasdasdasdsa", result);
        this.dersId = result[0].ders_id;
      });
      this.twitterService
        .findTweetByHashtag(hastag)
        .then(result2 => {
          if (!result2) return reject();
          let average = this.getAverage(result2);
          result2.forEach(element => {
            this.saveToDevmasizlikTalbe(
              element,
              this.controlLocation(element, average)
            );
          });
          result2.forEach(element => {
            this.saveTweets(element);
            // this.controlLocation(element, average);
          });
          return resolve(result2);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getAverage(data: any[]): number[] {
    let boylam = 0,
      enlem = 0,
      length = 0;
    data.forEach(element => {
      if (
        element.tweet.geo
        //   && element.tweet.user.name == "Kelim Almusa") ||
        // element.tweet.user.name === "Muhammed Miraç Kurt"
      ) {
        boylam += element.tweet.geo.coordinates[0];
        enlem += element.tweet.geo.coordinates[1];
        length++;
      }
    });
    boylam /= length;
    enlem /= length;
    console.log("Length", length);
    console.log("BOYLAM", boylam);
    console.log("enlem", enlem);
    return [boylam, enlem];
  }
  controlLocation(data, average: number[]): boolean {
    if (data.geo) {
      if (
        (data.geo.coordinates[0] <= average[0] + 0.0001 &&
          data.geo.coordinates[0] >= average[0] - 0.0001) ||
        (data.geo.coordinates[1] <= average[1] + 0.0001 &&
          data.geo.coordinates[1] >= average[1] - 0.0001)
      ) {
        console.log("Dahil", data.user.name);
        return true;
      } else {
        console.log("HAriç", data.user.name);
        return false;
      }
    }
    return false;
  }
  saveToDevmasizlikTalbe(tweet: any, gecerlilik): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into devamsizlik (ogr_id,tweet_id,islem_location,islem_tarih,ders_id,islem_gecerlilik) values ($1,$2,$3,$4,$5,$6)",
          [
            tweet.user.id_str,
            tweet.id_str,
            tweet.geo ? tweet.geo.coordinates : null,
            tweet.created_at,
            this.dersId,
            gecerlilik
          ]
        )
        .then(result => {
          if (!result) return reject();
          resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getTweetFromDBByOgrId(ogrId: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = ogrId.map((_, index) => "$" + (index + 1));
      this.dbs
        .getPool()
        .query(`select * from tweet where ogr_id in (${dollars})`, ogrId)
        .then(result => {
          if (!result) return reject();
          if (result.rows.length) {
            //gelen tweete tweeti yapan öğrenciyi ekleme
            this.ogrSer
              .findOgrenciByOgrId(ogrId)
              .then(res => {
                result.rows.map(e => (e.ogrenci = res[0]));
                resolve(result.rows);
              })
              .catch(e => {
                console.error(e);
                reject();
              });
          }
          resolve(result.rows);
          // end of gelen tweete tweeti yapan öğrenciyi ekleme

          // gelen tweete ilgili dersi ekleme
          const dersIdList = result.rows.map(e => e.ders_id);
          if (dersIdList.length) {
            this.derSer
              .getDersById(dersIdList)
              .then(req => {
                result.rows.map(e => (e.ders = req[0]));
                return resolve(result.rows);
                // end of gelen tweete ilgili dersi ekleme
              })
              .catch(e => {
                console.error(e);
                reject();
              });
          }
          resolve(result.rows);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getTweetFromDBByDersId(dersId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select * from tweet where ders_id=$1", [dersId]) // buraya sorguya (and tarih=$2 eklememiz lazım çünkü belli bir dersin belli tarihta yoklamasını alıyoruz)
        .then(result => {
          if (!result) return reject();
          //gelen tweete tweeti yapan öğrenciyi ekleme
          const ogrIdList = result.rows.map(i => i.ogr_id);
          this.ogrSer
            .findOgrenciByOgrId(ogrIdList)
            .then(res => {
              console.log("asdasdasd", ogrIdList);
              const ogrList = lodash.groupBy(res, "ogr_id");
              result.rows.map(e => {
                e.ogrenci = ogrList[e.ogr_id][0];
              });

              // resolve(result.rows);
            })
            .catch(e => {
              console.error(e);
              reject();
            });
          // end of gelen tweete tweeti yapan öğrenciyi ekleme

          // gelen tweete ilgili dersi ekleme
          const dersIdList = result.rows.map(e => e.ders_id);
          // console.log("dersIdList", dersIdList);
          this.derSer
            .getDersById(dersIdList)
            .then(req => {
              result.rows.map(e => (e.ders = req[0]));
              return resolve(result.rows);
              // end of gelen tweete ilgili dersi ekleme
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
  saveTweets(newTweet): Promise<QueryResult> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into tweet (tweet,ogr_id,tarih,ders_id)values($1,$2,$3,$4)",
          [newTweet, newTweet.user.id, newTweet.created_at, this.dersId]
        )
        .then(result => {
          if (!result || !result.rowCount) return reject();
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
