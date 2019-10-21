import { Pool, QueryConfig, QueryResult } from 'pg'

import { Status } from '../types/status'
import { UserInput, DBResult, MappedResult } from '../types/post'
import { UserContext } from '../types/context'

export class PostService {
  title: string
  content: string
  userid: string
  pool: Pool

  constructor(user: UserContext)
  constructor(user: UserContext | UserInput)
  constructor(user: any) {
    this.title = user.title || null
    this.content = user.content || null
    this.userid = user.userid
    this.pool = user.pool
  }

  /**
   * Map the result from database to which exactly same
   * as GraphQL type defination
   * @param data result from sql query
   * @return {MappedResult[]} mapped result
   */
  resultMapper(data: QueryResult): MappedResult[] {
    return data.rows.map(
      ({ username, title, content }: DBResult): MappedResult => {
        return {
          author: username,
          title,
          content,
        }
      }
    )
  }

  async publish(): Promise<Status> {
    if (!this.title || !this.content) {
      return {
        isSuccess: false,
        description: `No title or content provide`,
      } as Status
    }

    const query: QueryConfig = {
      text: 'INSERT INTO posts(authorid, title, content) VALUES($1, $2, $3)',
      values: [this.userid, this.title, this.content],
    }

    await this.pool.query(query)

    return {
      isSuccess: true,
      description: `Query successfully`,
    } as Status
  }

  async getAll(): Promise<MappedResult[]> {
    const query: QueryConfig = {
      text: `SELECT users.username, posts.title, posts."content" FROM posts
      LEFT JOIN users
      ON posts.authorid = users.userid`,
    }

    const result = await this.pool.query(query)

    return this.resultMapper(result)
  }

  async find(postid: Number): Promise<MappedResult> {
    const query: QueryConfig = {
      text: `SELECT users.username, posts.title, posts."content" FROM posts
      LEFT JOIN users
      ON posts.authorid = users.userid
      WHERE posts.postid = $1`,
      values: [postid],
    }

    const result = await this.pool.query(query)

    return this.resultMapper(result).pop()
  }
}
