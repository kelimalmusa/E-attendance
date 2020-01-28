"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var result_package_1 = require("../../common/result-package");
// import { deneme } from "../../../../models/deneme";
var ogrenci_service_1 = require("../../ogrenci/ogrenci/ogrenci.service");
var DenemeController = /** @class */ (function () {
    function DenemeController(service) {
        this.service = service;
    }
    // @Post()
    // setUser(@Body() body: deneme, @Res() res: Response) {
    //   console.log("body");
    //   console.dir(body); //model ekleyince any'i model tipine döndür
    //   console.log(" -- end of body");
    //   this.service
    //     .saveToDatabase(body)
    //     .then(() => res.status(HttpStatus.OK).json(ResultPackage.success()))
    //     .catch(() =>
    //       res.status(HttpStatus.BAD_REQUEST).json(ResultPackage.failed())
    //     );
    // }
    DenemeController.prototype.getTweet = function (res) {
        this.service
            .dd()
            .then(function (data) {
            res.status(common_1.HttpStatus.OK).json(result_package_1.ResultPackage.success(data));
            console.log("************************");
        })["catch"](function () {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(result_package_1.ResultPackage.failed());
        });
    };
    __decorate([
        common_1.Get("deneme-inset"),
        __param(0, common_1.Res())
    ], DenemeController.prototype, "getTweet");
    DenemeController = __decorate([
        common_1.Controller("api/deneme")
    ], DenemeController);
    return DenemeController;
}());
exports.DenemeController = DenemeController;
