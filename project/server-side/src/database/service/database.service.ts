import { Injectable } from "@nestjs/common";
import { Pool } from "pg";

@Injectable()
export class DatabaseService {
  pool: Pool;
  public dbConnector() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "attendance",
      password: "root",
      port: 5432,
      connectionTimeoutMillis: 2000,
    });
    console.log("-------------------------------");
    console.log("connected to databse successfully");
    console.log("-------------------------------");
    return this.pool;
  }
  getPool() {
    return this.pool || this.dbConnector();
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
