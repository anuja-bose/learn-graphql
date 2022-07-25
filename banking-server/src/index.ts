require('dotenv').config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AccountUserResolver } from "./resolvers/AccountUserResolver";
import { MysqlDataSource } from "./core/MySQLDataSource";

async function main() {
    // Future enhancement
    // Database connection will be placed in the seperate file
   
    MysqlDataSource.initialize()
        .then(() => {
            console.log("Mysql DataSource has been initialized!")
        })
        .catch((err) => {
            console.error("Error while initializing MYSQL Data Source... ", err)
        })


    const schema = await buildSchema({
        resolvers: [AccountUserResolver]
    })
    const server = new ApolloServer({ schema })
    await server.listen(4000)
    console.log("Server has started!")
}
main()