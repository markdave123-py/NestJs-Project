import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "../../users/entities/user.entity";
import { env } from "./env.config";


export const dbConfig: DataSourceOptions = {
    type: 'mysql',
    host: env.DBHOST,
    port: Number(env.DBPORT),
    username: env.DBUSER,
    password: env.DBPASSWORD,
    database: env.DBNAME,
    entities: [ UserEntity ],
    synchronize: true
  }
  
const dataSource =  new DataSource(dbConfig)

export default dataSource