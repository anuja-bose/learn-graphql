import { DataSource } from "typeorm";
export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "omsai@123",
    database: "banking",
    entities: ["./src/models/*.ts"],
    migrationsTableName: "orm_migration",
    migrations: ["migration/*.js"]
})