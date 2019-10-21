import { gql } from 'apollo-server'

export default gql`
  type Status {
    isSuccess: Boolean!
    description: String
  }
`
