import { gql } from 'apollo-server'

export default gql`
  type Post {
    author: String!
    title: String!
    content: String!
  }
`
