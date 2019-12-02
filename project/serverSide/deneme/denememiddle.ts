import { CisApiMiddleware } from "./middleware";
import express from "express";
import { DBConnection } from "../src/api/DBConnecion";
export const denememiddle: CisApiMiddleware = {
    insertHandler(req: any, res: any) {
        console.log(req.body);
        const resultObject = {
            status: "OK",
            message: "Başarılı",
            data: {
                x: "y"
            }
        };
        const connection = DBConnection.dbConnector();
        connection.query("select * from deneme", (err: any, res: any) => {
            if (err) { console.log("err", err); }
            else console.log(res.rows[4]);//https://node-postgres.com/features/queries
        });
        res.send(JSON.stringify(resultObject));
        console.log("sadsadsadsadsadsad");
    },
    handlerAdapter() {
        const router = express.Router();
        // insert işlemleri burada yapiliyor
        router.post("/deneme", this.insertHandler as express.RequestHandler);
        return router;
    },
};