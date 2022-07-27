import { DataSource } from "typeorm";
require('dotenv').config();

export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["./src/models/*.ts"],
    migrationsTableName: "orm_migration",
    migrations: ["migration/*.js"]
})
