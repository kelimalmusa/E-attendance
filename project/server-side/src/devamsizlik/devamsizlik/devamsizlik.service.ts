import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { QueryResult } from "pg";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { TweetService } from "src/tweet/tweet/tweet.service";

@Injectable()
export class DevamsizlikService {
  dersId: number;
  constructor(
    private dbs: DatabaseService,
    private twitterSer: TwitterService,
    private tweetSer: TweetService
  ) {}
  getAttendance(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDersId(hashtag); // ders id sini bulmak için daha sağlıklı bir yöntem gerekiyor onu araştır
      this.twitterSer
        .findTweetByHashtag(hashtag)
        .then(result => {
          if (!result) return reject();
          console.log("-------------------");
          console.dir(result);
          console.log("-------------------");
          resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  saveToDevmasizlikTalbe(tweet: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          "insert into devamsizlik (ogr_id,tweet_id,islem_location,islem_tarih,ders_id) values ($1,$2,$3,$4,$5)",
          [
            tweet.user.id_str,
            tweet.id_str,
            tweet.geo.coordinates,
            tweet.created_at,
            this.dersId
          ]
        )
        .then(result => {
          if (!result) return reject();
          console.log("saveTodatabse", result);
          resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getDersId(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select ders_id from ders where ders_code =$1", [hashtag])
        .then(result => {
          if (!result) return reject();
          this.dersId = result.rows[0].ders_id;
          console.log("result", this.dersId);
          // resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
