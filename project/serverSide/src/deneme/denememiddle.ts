import { CisApiMiddleware } from "./middleware";
import express from "express";
import { DBConnection } from "../api/DBConnecion";
export const denememiddle: CisApiMiddleware = {
    insertHandler(req, res) {
        console.log(req.body);
        const resultObject = {
            status: "OK",
            message: "Başarılı",
            data: {
                x: "y"
            }
        };
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