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
      let islemLocationList: string[];
      let tarihList: string[];
      this.tweetSer
        .getTweetFromDBByDersId(dersId)
        .then(result2 => {
          if (!result2) return reject();
          resolve(result2);
          tweetIdList = result2.map(tweetid => tweetid.tweet.id);
          console.log("tweetIdList", tweetIdList);
          ogrenciIdList = result2.map(ogrId => ogrId.tweet.user.id);
          console.log("ogrenciIdList", ogrenciIdList);
          islemLocationList = result2.map(location => {
            console.log("location.geo", location);
            return location.tweet.geo ? location.tweet.geo.coordinates : null;
          });
          console.log("locationList", islemLocationList);
          tarihList = result2.map(tarih => tarih.tweet.created_at);
          console.log("tarihList", tarihList);
          console.log(result2);
          const avr = this.tweetSer.getAverage(result2);
          console.log("avr", avr);
          // burada tweetlerin lokasyonunu kontrol etmek gerek ama for each içinde o yüzden düşünmek ve daha mantıklı yöntem var mı diye araştırmak lazım
          let controlledList = [];
          controlledList.push(
            result2.map(i => this.tweetSer.controlLocation(i.tweet, avr))
          );
          console.log("controlledList", controlledList);
          // this.tweetSer.controlLocation(result2, avr);

          this.savetoDevamsizlikTable(
            tweetIdList,
            ogrenciIdList,
            dersId,
            islemLocationList,
            tarihList
          );
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
    dersId: number,
    islemLocationList: string[],
    tarihList: string[]
  ) {
    const dollars = this.createDollars(ogrenciIdList);
    console.log(ogrenciIdList.length);
    // console.log("dollars", dollars);
    console.log("tweetIdList", tweetIdList);
    console.log("ogrenciIdList", ogrenciIdList);
    const values = this.getValues(
      ogrenciIdList,
      dersId,
      tweetIdList,
      islemLocationList,
      tarihList
    );
    console.log("values", values);
    this.dbs
      .getPool()
      .query(
        `insert into devamsizlik (ogr_id,ders_id,tweet_id,islem_location,islem_tarih) values ${dollars}`,
        values
      );
  }
  getValues(
    ogrenciIdList: number[],
    dersId: number,
    tweetIdList: number[],
    islemLocationList: string[],
    tarihList: string[]
  ) {
    let values = [];
    for (let i = 0, j = 0; i < ogrenciIdList.length; i++) {
      values[j++] = ogrenciIdList[i];
      values[j++] = dersId;
      values[j++] = tweetIdList[i];
      values[j++] = islemLocationList[i];
      values[j++] = tarihList[i];
    }
    return values;
  }
  createDollars(length) {
    const a = [];
    let sayi = 0;
    for (let i = 1; i <= length.length; i++) {
      a.push([]);
      for (let i2 = 1; i2 <= 5; i2++) {
        lodash.last(a).push("$" + ++sayi);
      }
    }
    const values = lodash.flatten(length.map(i => lodash.values(i)));

    const b = a.map(i => `(${i.join()})`).join();
    console.log("aaaaa", b);
    return b;
  }
  //   let a = [];
  //   let sayi = 0;
  //   for (let i = 0; i < length; i++) {
  //     a = new Array();
  //   }
  //   for (let j = 0; j < 5; j++) {
  //     a[j] = "$" + ++sayi;
  //   }
  //   let b = a.map(i => `(${lodash.join(a, ",")})`).join();
  //   return b;
  // }
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
