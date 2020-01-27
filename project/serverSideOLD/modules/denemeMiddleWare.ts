
import express from "express";
import { DBConnection } from "../src/api/DBConnecion";
import { middleware } from "./interface/middleware";
import { deneme } from "../deneme/deneme";
import { Twitter } from "../src/index";
export class ahmet {
    public static save() {
        Twitter.get('search/tweets', {
            q: '#CADOS123',
            count: 100,
            result_type: "mix"
        }).catch(function (err: Error) {
            console.log('caught error', err.stack)
        }).then(function (result: any) {
            console.log(result.data.statuses.length);
            result.data.statuses.forEach((element: any) => {
                //     // if (element.user.name === "العربية") {
                console.log('name', element.user.name);
                console.log('data', element.geo);
                //         // getRtweeters(element.name);
            }
            )
        });
    }
}
export const denemeMiddleWare: middleware = {
    insertHandler(req: any, res: any) {
        const deger = Twitter.get('search/tweets', {
            q: '#CADOS123',
            count: 100,
            result_type: "mix"
        }).catch(function (err: Error) {
            console.log('caught error', err.stack)
        }).then(function (result: any) {
            console.log(result.data.statuses.length);
            result.data.statuses.forEach((element: any) => {
                //     // if (element.user.name === "العربية") {
                // console.log('name', element.user.name);
                // console.log('data', element.geo);
                //         // getRtweeters(element.name);

                console.log(element.user);
                // console.log("asdadad", deger.name);
                const resultObject = {
                    status: "OK",
                    message: "Başarılı",
                    data: {
                        x: "y"
                    }
                };
                const connection = DBConnection.dbConnector();
                // connection.query("select * from deneme", (err: any, res: any) => {//burada select işlemi yapılıyor
                //     if (err) { console.log("err", err); }
                //     // else console.log(res.rows[4]);//https://node-postgres.com/features/queries
                // });
                connection.query( // burada insert işlem yapılıyor
                    "insert into deneme (name,age) values ($1,$2);",
                    [
                        element.user.name,
                        element.user.id
                    ],
                );
                res.send(JSON.stringify(resultObject));
                return result;
            });
        }
        )
    },
    handlerAdapter() {
        const router = express.Router();
        // insert işlemleri burada yapiliyor
        router.post("/deneme", this.insertHandler as express.RequestHandler);
        return router;
    },
};