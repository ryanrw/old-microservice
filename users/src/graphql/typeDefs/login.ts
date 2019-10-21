import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    login(username: String, passwd: String): Message!
  }
`
