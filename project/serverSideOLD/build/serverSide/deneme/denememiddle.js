"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DBConnecion_1 = require("../src/api/DBConnecion");
exports.denememiddle = {
    insertHandler: function (req, res) {
        console.log(req.body);
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
            "mehmet",
            62
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
