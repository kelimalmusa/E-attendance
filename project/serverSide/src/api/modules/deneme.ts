import express from "express";
const mysql = require('mysql2');
import { deneme } from "../../../../models/deneme"
import { DBConnection } from "../DBConnecion";
import { Result } from "range-parser";
import { createPool } from "mysql";
export const PatientMiddleWare = {
    insertHandler() {

        const connection = DBConnection.dbConnector();
        connection.execute(
            "insert into deneme (name,age) values (?,?);",
            [
                "ahmet",
                26
            ],
        );
        connection.execute(
            "insert into deneme (name,age) values (?,?);",
            [
                "mehmet",
                62
            ],
        );
    }
}
