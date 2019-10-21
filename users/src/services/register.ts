import { Pool, QueryConfig } from 'pg'
import bcrypt from 'bcrypt'

import { ReturnStatus } from '../interfaces/auth'
import message from './status'

export default class RegisterService {
  username: String
  passwd: String
  pool: Pool

  constructor(username: String, passwd: String, pool: Pool) {
    this.username = username
    this.passwd = passwd
    this.pool = pool
  }

  async Register(): Promise<ReturnStatus> {
    try {
      const saltRounds = 10
      const hashPasswd = await bcrypt.hash(this.passwd, saltRounds)

      const query: QueryConfig = {
        text: 'INSERT INTO users(username, passwd) VALUES($1, $2)',
        values: [this.username, hashPasswd],
      }

      await this.pool.query(query)

      return message('done')
    } catch (error) {
      console.error(error)
      return message('error', "Can't register.")
    }
  }
}
