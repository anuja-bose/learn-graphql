export = {

  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "xxxxxx",
  database: "banking",
  entities: ["./src/models/*.ts"],
  migrationsTableName : "orm_migration",
  migrations: ["migration/*.js"]  ,
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
};

// Note the above file is not being used currently.
// Future enhancements:
// 1. making use of this file instead of directly passing the values into index.ts
// 2. adding the username and password details to the .env file

