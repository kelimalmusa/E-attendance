"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
var DBConnection = /** @class */ (function () {
    function DBConnection() {
    }
    DBConnection.dbConnector = function () {
        var pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "root",
            database: "Inspection",
        });
        console.log("-------------------------------");
        console.log("connected to databse successfully");
        console.log("-------------------------------");
        return pool;
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
