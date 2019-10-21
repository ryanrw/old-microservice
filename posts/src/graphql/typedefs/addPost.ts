import { gql } from 'apollo-server'

export default gql`
  extend type Mutation {
    addPost(title: String!, content: String!): Status!
  }
`
