import express, { Response } from "express";
import "reflect-metadata";
import { Connection } from "typeorm";
import { buildApolloServer } from "./apolloServer";
import debug from "./debug/router";
import { RestError } from "./Errors/RestErrors/restErrors";
import logger from "./logger";
import { expressLoggerCreator } from "./logger/expressLogger";
import { buildRepositories } from "./tools/buildRepository";
import version from "./version/router";

const log = logger(module);

const send = (res: Response, status: number, message: string, data?: string) =>
  res.status(status).send({ status, message, data });

const errorHandler: express.ErrorRequestHandler = (err, req, res, _next) => {
  req.err = err;

  if (err instanceof RestError) {
    const { message, status, data } = err.response;
    send(res, status, message, data);

    if (err.response.backlogMessage) {
      log.error(err.response.backlogMessage);
    }
  } else if (err instanceof Error) {
    send(
      res,
      500,
      "Backend error",
      err instanceof Error ? err.message : undefined
    ); //Backend Error
  }
};
export const GQL_PATH = "/api/gql";

export const createApp = (connection: Connection) => {
  const db = buildRepositories(connection.manager);

  const apolloServer = buildApolloServer(db);

  const app = express();
  app.use(expressLoggerCreator(GQL_PATH));

  app.use((req, res, next) => {
    req.context = { db };

    next();
  });

  app.use("/api/version", version);
  app.use("/api/debug", debug);

  // Graphql
  apolloServer.applyMiddleware({
    app,
    path: GQL_PATH,
  });

  app.use(errorHandler);

  return app;
};
