"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('pg'), Pool = _a.Pool, Client = _a.Client;
var mysql = require('mysql2');
var DBConnection = /** @class */ (function () {
    function DBConnection() {
    }
    DBConnection.dbConnector = function () {
        var pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'attendance',
            password: 'root',
            port: 5432,
        });
        console.log("-------------------------------");
        console.log("connected to databse successfully");
        console.log("-------------------------------");
        return pool;
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
