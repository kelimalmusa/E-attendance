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
var OgrenciService = /** @class */ (function () {
    function OgrenciService(dbs) {
        this.dbs = dbs;
    }
    OgrenciService.prototype.insertStudent = function (newOgrenci) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbs
                .getPool()
                .query("insert into ogrenci (ogr_no,ogr_name,ogr_username,ogr_ogrenim_turu,ogr_user_id,ogr_username)values($1,$2,$3,$4,$5,$6)", [
                newOgrenci.ogr_no,
                newOgrenci.ogr_name,
                newOgrenci.ogr_surname,
                newOgrenci.ogr_ogrenim_turu,
                newOgrenci.ogr_user_id,
                newOgrenci.ogr_username
            ])
                .then(function (result) {
                if (!result || !result.rowCount)
                    return reject();
                console.dir(result);
                return resolve();
            })["catch"](function (e) {
                console.error(e);
                reject();
            });
        });
    };
    OgrenciService.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dbs
                .getPool()
                .query("select * from ogrenci")
                .then(function (result) {
                if (!result)
                    return reject();
                console.log("-----------------------");
                console.dir(result);
                console.log("-----------------------");
                return resolve();
            })["catch"](function (e) {
                console.error(e);
                reject();
            });
        });
    };
    OgrenciService = __decorate([
        common_1.Injectable()
    ], OgrenciService);
    return OgrenciService;
}());
exports.OgrenciService = OgrenciService;
