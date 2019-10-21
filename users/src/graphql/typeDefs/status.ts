import { gql } from 'apollo-server'

export default gql`
  type Message {
    isSuccess: Boolean!
    description: String
    jwt: String
  }
`
