// seperate the server listener into function for test
import { ApolloServer } from 'apollo-server'

import { typeDefs } from './graphql/typedefs'
import { resolvers } from './graphql/resolvers'
import { context } from './graphql/context'

export function start() {
  const server = new ApolloServer({ typeDefs, resolvers, context })

  return server
}
