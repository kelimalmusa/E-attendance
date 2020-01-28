"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var database_service_1 = require("../../database/service/database.service");
var models_1 = require("../../models/models");
var twit = require("twit");
exports.Twitter = new twit({
    consumer_key: "QrSELxABo1TSwl0Bpr6DV9VK4",
    consumer_secret: "yFsBhyYfVhenZwjLw5Okl2PdTWGjUH8czLGlCfnYabVlwLr8fp",
    access_token: "1259478528-FyebKFry33MmmearEhcD0Wy2ZU9ZkS9D54Gysth",
    access_token_secret: "btWJMbmDXndutbZAdVuHqP3LPJM7R5x9gFtk0JhjxiCm2",
    timeout_ms: 60 * 1000,
    strictSSL: true // optional - requires SSL certificates to be valid.
});
var DenemeService = /** @class */ (function () {
    function DenemeService(dbs) {
        this.dbs = dbs;
    }
    DenemeService.prototype.saveToDatabase = function (deneme) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbs
                .getPool()
                .query("insert into deneme(name, age)values($1, $2)", [
                deneme.name,
                deneme.age
            ])
                .then(function (result) {
                if (!result.rowCount)
                    return reject();
                console.dir(result.rowCount);
                console.log("----------------*********************");
                resolve();
            })["catch"](function (e) {
                console.error(e);
                reject();
            });
        });
    };
    // tt() {
    //   return new Promise((resolve, reject) => {
    //     Twitter.get("search/tweets", {
    //       q: "#CADOS123",
    //       count: 100,
    //       result_type: "mixed"
    //     })
    //       .then(function(result: any) {
    //         console.log(result.data.statuses.length);
    //         resolve(result.data.statuses);
    //       })
    //       .catch(e => {
    //         console.error(e);
    //         reject();
    //       });
    //   });
    // }
    DenemeService.prototype.dd = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbs
                .getPool()
                .query("select * from deneme")
                .then(function (result) {
                console.log(result.rows);
                resolve(result);
            })["catch"](function (e) {
                console.error(e);
                reject();
            });
        });
    };
    DenemeService = __decorate([
        common_1.Injectable()
    ], DenemeService);
    return DenemeService;
}());
exports.DenemeService = DenemeService;
