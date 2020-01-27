"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DBConnecion_1 = require("../src/api/DBConnecion");
var index_1 = require("../src/index");
var ahmet = /** @class */ (function () {
    function ahmet() {
    }
    ahmet.save = function () {
        index_1.Twitter.get('search/tweets', {
            q: '#CADOS123',
            count: 100,
            result_type: "mix"
        }).catch(function (err) {
            console.log('caught error', err.stack);
        }).then(function (result) {
            console.log(result.data.statuses.length);
            result.data.statuses.forEach(function (element) {
                //     // if (element.user.name === "العربية") {
                console.log('name', element.user.name);
                console.log('data', element.geo);
                //         // getRtweeters(element.name);
            });
        });
    };
    return ahmet;
}());
exports.ahmet = ahmet;
exports.denemeMiddleWare = {
    insertHandler: function (req, res) {
        var deger = index_1.Twitter.get('search/tweets', {
            q: '#CADOS123',
            count: 100,
            result_type: "mix"
        }).catch(function (err) {
            console.log('caught error', err.stack);
        }).then(function (result) {
            console.log(result.data.statuses.length);
            result.data.statuses.forEach(function (element) {
                //     // if (element.user.name === "العربية") {
                console.log('name', element.user.name);
                console.log('data', element.geo);
                //         // getRtweeters(element.name);
                console.log(element.user);
                // console.log("asdadad", deger.name);
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
                    element.user.name,
                    element.user.id
                ]);
                res.send(JSON.stringify(resultObject));
                return result;
            });
        });
    },
    handlerAdapter: function () {
        var router = express_1.default.Router();
        // insert işlemleri burada yapiliyor
        router.post("/deneme", this.insertHandler);
        return router;
    },
};
