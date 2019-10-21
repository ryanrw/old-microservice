import { introspectSchema, makeRemoteExecutableSchema } from "graphql-tools";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";
import { GraphQLRequest } from "apollo-link";
import { setContext } from "apollo-link-context";

export async function getExecuableSchema(link: string) {
  const graphqlLink = new HttpLink({ uri: link, fetch });
  const linkWithHeader = setContext(
    (_request: GraphQLRequest, previousContext) => {
      if (
        !(
          Object.keys(previousContext).length === 0 &&
          previousContext.constructor === Object
        )
      ) {
        return {
          headers: {
            Authorization:
              previousContext.graphqlContext.headers.authorization || null
          }
        };
      }
    }
  ).concat(graphqlLink);
  const schema = await introspectSchema(linkWithHeader);
  const execuableSchema = makeRemoteExecutableSchema({
    schema,
    link: linkWithHeader
  });

  return execuableSchema;
}
