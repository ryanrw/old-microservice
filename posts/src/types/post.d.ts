import { Pool } from 'pg'

export interface UserInput {
  title: string
  content: string
}

export interface UserFindPostInput {
  postid: Number
}

export interface DBResult {
  username: string
  title: string
  content: string
}

export interface MappedResult {
  author: string
  title: string
  content: string
}
