import { Pool } from 'pg'

export interface UserContext {
  userid: string
  pool: Pool
}
