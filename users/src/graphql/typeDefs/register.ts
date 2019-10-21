import { gql } from 'apollo-server'

export default gql`
  extend type Mutation {
    register(username: String!, passwd: String!): Message!
  }
`
