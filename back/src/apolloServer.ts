import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync, NonEmptyArray } from "type-graphql";
import { UserResolvers } from "./resolvers/UserResolvers";
import { Repositories } from "./tools/RepositoryType";

export function buildApolloServer(db: Repositories) {
  const resolvers = [...UserResolvers] as NonEmptyArray<Function>;
  const schema = buildSchemaSync({
    resolvers,
    authMode: "error",
  });

  const server = new ApolloServer({
    schema,
    context: { db },
  });

  return server;
}
