import { Pool } from 'pg'

export interface UserInfo {
  username: string
  passwd: string
}

export interface Registration extends UserInfo {
  pool: Pool
}

export interface LoginUserData extends UserInfo {
  userid: string
}

export type StatusType = 'done' | 'error'

export interface ReturnStatus {
  isSuccess: Boolean
  description?: string
  jwt?: string
}
