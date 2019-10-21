import { mergeSchemas } from "graphql-tools";
import { graphqlExpress } from "apollo-server-express/dist/expressApollo";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { getExecuableSchema } from "./getSchema";

export async function start() {
  const usersAPI = await getExecuableSchema("http://localhost:4002/graphql");
  const postsAPI = await getExecuableSchema("http://localhost:4001/graphql");

  const schema = mergeSchemas({
    schemas: [usersAPI, postsAPI]
  });

  const app = express();

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    graphqlExpress(async request => ({
      schema,
      context: { headers: request.headers || null }
    }))
  );
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000/graphql`)
  );
}
