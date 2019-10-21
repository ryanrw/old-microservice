import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    find(postid: Int!): Post
  }
`
