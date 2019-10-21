import { Pool, QueryConfig } from 'pg'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { LoginUserData } from '../interfaces/auth'
import message from './status'
import config from '../config'

export default class AuthService {
  username: String
  passwd: String
  pool: Pool

  constructor(username: String, passwd: String, pool: Pool) {
    this.username = username
    this.passwd = passwd
    this.pool = pool
  }

  async login() {
    try {
      const query: QueryConfig = {
        text: 'SELECT * FROM users WHERE username = $1',
        values: [this.username],
      }

      const result = await this.pool.query(query)

      if (result.rowCount < 0) {
        return message('error', 'User not found!')
      }

      const userInfo = result.rows[0] as LoginUserData
      const isCorrect = await bcrypt.compare(this.passwd, userInfo.passwd)

      if (!isCorrect) {
        return message('error', 'Password incorrected!')
      }

      const payload = jwt.sign(
        {
          userid: userInfo.userid,
          username: userInfo.username,
        },
        config.secret
      )

      return message('done', payload)
    } catch (error) {
      console.error(error)
      return message('error', 'Unknown Error')
    }
  }
}
