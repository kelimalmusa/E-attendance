"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
var DBConnecion_1 = require("../DBConnecion");
exports.PatientMiddleWare = {
    insertHandler: function () {
        var connection = DBConnecion_1.DBConnection.dbConnector();
        connection.execute("insert into deneme (name,age) values (?,?);", [
            "ahmet",
            26
        ]);
        connection.execute("insert into deneme (name,age) values (?,?);", [
            "mehmet",
            62
        ]);
    }
};
