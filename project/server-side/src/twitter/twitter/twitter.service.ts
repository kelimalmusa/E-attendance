import { Injectable } from "@nestjs/common";
import * as twit from "twit";
export const Twitter = new twit({
  consumer_key: "QrSELxABo1TSwl0Bpr6DV9VK4",
  consumer_secret: "yFsBhyYfVhenZwjLw5Okl2PdTWGjUH8czLGlCfnYabVlwLr8fp",
  access_token: "1259478528-FyebKFry33MmmearEhcD0Wy2ZU9ZkS9D54Gysth",
  access_token_secret: "btWJMbmDXndutbZAdVuHqP3LPJM7R5x9gFtk0JhjxiCm2",
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true // optional - requires SSL certificates to be valid.
});
@Injectable()
export class TwitterService {
  constructor() {}

  findTweetByHashtag(hashtag: string) {
    return new Promise((resolve, reject) => {
      Twitter.get("search/tweets", {
        q: "#" + hashtag,
        count: 100,
        result_type: "mixed"
        // until: "2020-01-28"
      })
        .then(function(result: any) {
          //   console.log(result.data.statuses);
          result.data.statuses.forEach(element => {
            if (element.geo)
              console.log(element.user.name, element.geo.coordinates);
          });
          resolve(result.data.statuses);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
}
