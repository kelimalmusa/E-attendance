import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { QueryResult } from "pg";
import { TwitterService } from "src/twitter/twitter/twitter.service";

@Injectable()
export class TweetService {
  dersId: number;
  constructor(
    private dbs: DatabaseService,
    private twitterService: TwitterService
  ) {}
  collectTweets(hastag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDersId(hastag);
      this.twitterService
        .findTweetByHashtag(hastag)
        .then(result => {
          if (!result) return reject();
          this.controlLocation(result);
          //   console.dir(result);
          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  controlLocation(data: any[]) {
    let boylam = 0,
      enlem = 0,
      length = 0;
    data.forEach(element => {
      if (
        (element.geo && element.user.name == "Kelim Almusa") ||
        element.user.name === "Muhammed Miraç Kurt"
      ) {
        boylam += element.geo.coordinates[0];
        enlem += element.geo.coordinates[1];
        length++;
      }
    });
    console.log("Length", length);
    console.log("BOYLAM", (boylam /= length));
    console.log("enlem", (enlem /= length));
    data.forEach(element => {
      if (element.geo) {
        if (
          (element.geo.coordinates[0] <= boylam + 0.0001 &&
            element.geo.coordinates[0] >= boylam - 0.0001) ||
          (element.geo.coordinates[1] <= enlem + 0.0001 &&
            element.geo.coordinates[1] >= enlem - 0.0001)
        )
          console.log("Dahil", element.user.name);
        else console.log("HAriç", element.user.name);
      }
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
          this.getDersId(newTweet.entities.hashtags[0].text);
          return resolve();
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
