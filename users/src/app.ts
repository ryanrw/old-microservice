import { ApolloServer } from 'apollo-server'

import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'
import { pool } from './loaders/pg'

export function server(): ApolloServer {
  const app = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return { pool }
    },
  })

  return app
}
