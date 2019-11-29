"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
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
        res.send(JSON.stringify(resultObject));
        console.log("sadsadsadsadsadsad");
    },
    handlerAdapter: function () {
        var router = express_1.default.Router();
        // insert işlemleri burada yapiliyor
        router.post("/deneme", this.insertHandler);
        return router;
    },
};
