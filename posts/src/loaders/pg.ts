import { Pool } from 'pg'
import config from '../config'

export const pool = new Pool({
  user: config.dbUsername,
  host: config.dbURL,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
})
