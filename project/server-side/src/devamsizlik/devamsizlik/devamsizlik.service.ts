import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import { TwitterService } from "src/twitter/twitter/twitter.service";
import { TweetService } from "src/tweet/tweet/tweet.service";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import * as lodash from "lodash";
import { Ogrenci, Tweet } from "src/models/models";
import { DersService } from "src/ders/ders/ders.service";

@Injectable()
export class DevamsizlikService {
  dersId: number;
  constructor(
    private dbs: DatabaseService,
    private twitterSer: TwitterService,
    private tweetSer: TweetService,
    private ogrSer: OgrenciService,
    private dersSer: DersService
  ) {}
  getAttendance(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // this.getDersId(hashtag); // ders id sini bulmak için daha sağlıklı bir yöntem gerekiyor onu araştır
      this.dbs
        .getPool()
        .query("select ogr_id from devamsizlik where islem_gecerlilik=true")
        .then(result => {
          if (!result) return reject();
          result.rows.forEach(element => {
            this.ogrSer
              .findOgrenciByOgrId(element.ogr_id)
              .then(res => {
                if (!res) return reject();
                resolve(res);
              })
              .catch(e => {
                console.error(e);
                reject();
              });
          });
          return resolve(result);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  //burada istersek by ders Id istersek de by ders Hashtag yapabiliriz

  getDersId(hashtag: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query("select ders_id from ders where ders_code =$1", [hashtag])
        .then(result => {
          if (!result) return reject();
          this.dersId = result.rows[0].ders_id;
          console.log("result", this.dersId);
          resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  getAttendanceByDers(dersId: number): Promise<any> {
    // ders tarih de eklemek gerek
    return new Promise((resolve, reject) => {
      let ogrenciIdList: number[];
      let tweetIdList: number[];
      this.tweetSer
        .getTweetFromDBByDersId(dersId)
        .then(result2 => {
          if (!result2) return reject();
          resolve(result2);
          tweetIdList = result2.map(tweetid => tweetid.tweet.id);
          console.log("tweetIdList", tweetIdList);
          ogrenciIdList = result2.map(ogrId => ogrId.tweet.user.id);
          console.log("ogrenciIdList", ogrenciIdList);
        })
        .catch(e => {
          console.error(e);
          reject();
        });
      resolve();
    });
  }
  savetoDevamsizlikTable(
    tweetIdList: number[],
    ogrenciIdList: number[],
    dersId: number
  ) {
    this.dbs
      .getPool()
      .query(
        `insert into devamsizlik (ogr_id,ders_id,tweet_id,islem_location,islem_tarih) values `
      );
  }
}
//gerekli
//
//  const devamsizlik_list = ogrIdList.map(ogrId => {
//   const ogrenciTweets = twets.filter(i => i.user.id === ogrId);
//   let tweetId = null;
//   if (ogrenciTweets.length) {
//     const lastTweet = lodash.last(ogrenciTweets);
//     tweetId = lastTweet.id;
//   }
//   return [ogrId, tweetId];
// });

// const a = [];
// let sayi = 0;
// for (let i = 1; i <= devamsizlik_list.length; i++) {
//   a.push([]);
//   for (let i2 = 1; i2 <= 2; i2++) {
//     lodash.last(a).push("$" + ++sayi);
//   }
// }

// const values = lodash.flatten(
//   devamsizlik_list.map(i => lodash.values(i))
// );

// console.log(a.map(i => `(${i.join()})`).join());
// // console.log("values", values);
// console.log("aaaaa", a);

//
