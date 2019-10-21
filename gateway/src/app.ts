import { mergeSchemas } from "graphql-tools";
import { ApolloServer } from "apollo-server";
import { getExecuableSchema } from "./getSchema";

export async function start() {
  const usersAPI = await getExecuableSchema("http://localhost:4002/graphql");
  const postsAPI = await getExecuableSchema("http://localhost:4001/graphql");

  const schema = mergeSchemas({
    schemas: [usersAPI, postsAPI]
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return req;
    }
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}
