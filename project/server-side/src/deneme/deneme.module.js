"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var deneme_controller_1 = require("./deneme/deneme.controller");
var database_module_1 = require("../database/database.module");
var deneme_service_1 = require("./deneme/deneme.service");
var DenemeModule = /** @class */ (function () {
    function DenemeModule() {
    }
    DenemeModule = __decorate([
        common_1.Module({
            controllers: [deneme_controller_1.DenemeController],
            imports: [database_module_1.DatabaseModule],
            providers: [deneme_service_1.DenemeService]
        })
    ], DenemeModule);
    return DenemeModule;
}());
exports.DenemeModule = DenemeModule;
