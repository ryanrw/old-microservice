import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

if (!envFound) {
  throw new Error('.env file not found!!')
}

export default {
  dbUsername: process.env.PGUSER,
  dbPassword: process.env.PGPASSWD,
  dbName: process.env.PGDATABASE,
  dbURL: process.env.PGHOST,
  dbPort: parseInt(process.env.PGPORT, 10),
  secret: process.env.SECRETKEY,
}
