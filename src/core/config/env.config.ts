import { config } from "dotenv"


config()


export const env = Object.freeze({
    DBPORT: process.env.DB_PORT,
    DBHOST: process.env.DB_HOST,
    DBUSER: process.env.DB_USER,
    DBPASSWORD: process.env.DB_PASSWORD,
    DBNAME: process.env.DB_NAME,
    DBTYPE: process.env.DB_TYPE
})

