const { Pool, Client } = require('pg');
const mysql = require('mysql2');
export class DBConnection {
    public static dbConnector() {
        const pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'Attendance',
            password: 'root',
            port: 5432,
        });
        console.log("-------------------------------");
        console.log("connected to databse successfully");
        console.log("-------------------------------");
        return pool;
    }
    // public static dbConnector() {
    //     const pool = mysql.createPool({
    //         host: "localhost",
    //         user: "root",
    //         password: "root",
    //         database: "deneme",
    //     });
    //     console.log("-------------------------------");
    //     console.log("connected to databse successfully");
    //     console.log("-------------------------------");
    //     return pool;
    // }


}