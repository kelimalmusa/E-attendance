const mysql = require('mysql2');
export class DBConnection {
    public static dbConnector() {
        const pool = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "root",
            database: "Inspection",
        });
        console.log("-------------------------------");
        console.log("connected to databse successfully");
        console.log("-------------------------------");
        return pool;
    }

    private constructor() { }
}