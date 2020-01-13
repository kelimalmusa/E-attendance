"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DBConnecion_1 = require("../src/api/DBConnecion");
var deneme_1 = require("../deneme/deneme");
exports.denemeMiddleWare = {
    insertHandler: function (req, res) {
        var deger = Object.assign(new deneme_1.deneme(), req.body);
        console.log("asdadad", deger.name);
        var resultObject = {
            status: "OK",
            message: "Başarılı",
            data: {
                x: "y"
            }
        };
        var connection = DBConnecion_1.DBConnection.dbConnector();
        // connection.query("select * from deneme", (err: any, res: any) => {//burada select işlemi yapılıyor
        //     if (err) { console.log("err", err); }
        //     // else console.log(res.rows[4]);//https://node-postgres.com/features/queries
        // });
        connection.query(// burada insert işlem yapılıyor
        "insert into deneme (name,age) values ($1,$2);", [
            deger.name,
            deger.age
        ]);
        res.send(JSON.stringify(resultObject));
    },
    handlerAdapter: function () {
        var router = express_1.default.Router();
        // insert işlemleri burada yapiliyor
        router.post("/deneme", this.insertHandler);
        return router;
    },
};
