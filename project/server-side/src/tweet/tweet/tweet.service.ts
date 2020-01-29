import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { QueryResult } from "pg";
import { TwitterService } from "src/twitter/twitter/twitter.service";

@Injectable()
export class TweetService {
  constructor(
    private dbs: DatabaseService,
    private twitterService: TwitterService
  ) {}
  collectTweets(hastag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.twitterService
        .findTweetByHashtag(hastag)
        .then(result => {
          if (!result) return reject();
          //   console.dir(result);
          return resolve(result);
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
        .query("insert into tweet (tweet,ogr_id)values($1,$2)", [
          newTweet,
          newTweet.user.id,
          // newTweet.ders_id
        ])
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
}
