// using root type definition to make other extendable
import { gql } from 'apollo-server'

export default gql`
  type Query {
    root: String!
  }

  type Mutation {
    root: String!
  }
`
