import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/service/database.service";
import * as lodash from "lodash";

@Injectable()
export class YoklamaService {
  constructor(private dbs: DatabaseService) {}

  saveToYoklama(
    ogrId: number,
    dersId: number,
    gecerlilik: boolean,
    tarih: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dbs
        .getPool()
        .query(
          `update yoklama set hafta${this.calculateWeek(
            tarih
          )} = ${gecerlilik} where ders_id= ${dersId} and ogr_id= ${ogrId}`
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
  insertStudentAndDers(ogrId: number, dersId: number[]): Promise<any> {
    return new Promise((resolve, reject) => {
      const dollars = this.createDollars(dersId);
      const values = this.getValues(ogrId, dersId);
      console.log("-----------------------------------");
      console.log(values);
      console.log("-----------------------------------");
      this.dbs
        .getPool()
        .query(`insert into yoklama (ogr_id,ders_id) values ${dollars}`, values)
        .then(result => {
          if (!result) return reject();
          return resolve();
        })
        .catch(e => {
          console.error(e);
          reject();
        });
    });
  }
  calculateWeek(date: string) {
    const mili = Date.parse(date); // 01/01/1970 00:00:00 den verilen tarihe kadar kaç mili saniye geçtiğini hesaplıyor
    console.log("DATE", date);
    console.log("mili", mili);
    if (mili < 1581897599000 && mili > 1581292800000) return 1;
    else if (mili < 1582502398000 && mili > 1581897599000) return 2;
    else if (mili < 1583107197000 && mili > 1582502398000) return 3;
    else if (mili < 1583711996000 && mili > 1583107197000) return 4;
    else if (mili < 1584316795000 && mili > 1583711996000) return 5;
    else if (mili < 1584921594000 && mili > 1584316795000) return 6;
    else if (mili < 1585526393000 && mili > 1584921594000) return 7;
    else if (mili < 1586131192000 && mili > 1585526393000) return 8;
    else if (mili < 1586735991000 && mili > 1586131192000) return 9;
    else if (mili < 1587340790000 && mili > 1586735991000) return 10;
    else if (mili < 1587945589000 && mili > 1587340790000) return 11;
    else if (mili < 1588550388000 && mili > 1587945589000) return 12;
    else if (mili < 1589155187000 && mili > 1588550388000) return 13;
    else if (mili < 1590364785000 && mili > 1589759986000) return 14;
    else if (mili < 1590969584000 && mili > 1589759986000) return 15;
  }
  getValues(ogrenciId: number, dersIdList: number[]) {
    let values = [];
    for (let i = 0, j = 0; i < dersIdList.length; ) {
      values[j++] = ogrenciId;
      values[j++] = dersIdList[i++];
    }
    console.log("dersIdList", values);
    return values;
  }
  createDollars(length) {
    const a = [];
    let sayi = 0;
    for (let i = 1; i <= length.length; i++) {
      a.push([]);
      for (let i2 = 1; i2 <= 2; i2++) {
        lodash.last(a).push("$" + ++sayi);
      }
    }
    const values = lodash.flatten(length.map(i => lodash.values(i)));

    const b = a.map(i => `(${i.join()})`).join();
    console.log("aaaaa", b);
    return b;
  }
}
