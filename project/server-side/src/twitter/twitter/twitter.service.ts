import { Injectable } from "@nestjs/common";
import * as twit from "twit";
import { QueryResult } from "pg";
export const Twitter = new twit({
  consumer_key: "",
  consumer_secret: "",
  access_token: "",
  access_token_secret: "",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});
@Injectable()
export class TwitterService {
  constructor() {}

  findTweetByHashtag(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let res = [];
      Twitter.get("search/tweets", {
        q: "#" + hashtag,
        count: 100,
        result_type: "mixed"
        // until: "2020-01-31"
      })
        .then(function(result: any) {
          result.data.statuses.forEach(element => {
            const date = new Date(element.created_at).getDate();
            if (date === new Date().getDate()) res.push(element);
          });
          resolve(res);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  findUserId(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Twitter.get("users/show", {
        screen_name: username
        // until: "2020-01-31"
      })
        .then(function(result: any) {
          console.log(result.data);
          // result.data.statuses.forEach(element => {
          //   if (element.geo)
          //     console.log(element.user.name, element.geo.coordinates);
          // });
          resolve(result.data.id);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
