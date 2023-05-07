import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://wanted-seagull-42.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "J0fe9tPsJOlO1e49cXhIxhUfeClPVezIJUcqa58AIURS6H6u6ABh6w2VBZEc8j1e",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://wanted-seagull-42.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "J0fe9tPsJOlO1e49cXhIxhUfeClPVezIJUcqa58AIURS6H6u6ABh6w2VBZEc8j1e",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
