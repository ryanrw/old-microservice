import jwt from 'jsonwebtoken'
import { Request } from 'express'

import config from '../config'
import { pool } from '../loaders/pg'
import { UserContext } from '../types/context'

export const context = ({ req }: { req: Request }) => {
  try {
    const token = req.headers.authorization || ''
    const payload = jwt.verify(token, config.secret) as UserContext

    return {
      userid: payload.userid,
      pool: pool,
    }
  } catch (error) {
    return { pool }
  }
}
