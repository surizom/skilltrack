import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener,
} from "apollo-server-plugin-base";
import { AnyFunction } from "apollo-server-types";
import logger from ".";

const log = logger(module);

interface CustomContext {
  start: bigint;
}

class RequestLogger implements GraphQLRequestListener<CustomContext> {
  [key: string]: AnyFunction | undefined;
  willSendResponse(
    requestContext: GraphQLRequestContextWillSendResponse<CustomContext>
  ) {
    const time = Number(
      (process.hrtime.bigint() - requestContext.context.start) / BigInt(1000000)
    );
    const metadata: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    } = {
      time,
      queryHash: requestContext.queryHash,
    };

    let level = "debug";
    if (requestContext.errors && requestContext.errors.length > 0) {
      level = "error";
      metadata["errors"] = requestContext.errors.map((err) => {
        return {
          message: err.message,
          path: err.path,
          stack: err.stack,
        };
      });
    }

    log.log(level, `GQL ${requestContext.operationName}`, metadata);
  }
}

class ApolloLogger implements ApolloServerPlugin<CustomContext> {
  requestLogger = new RequestLogger();

  requestDidStart(
    requestContext: GraphQLRequestContext<CustomContext>
  ): GraphQLRequestListener<CustomContext> {
    requestContext.context.start = process.hrtime.bigint();
    return this.requestLogger;
  }
}

export default ApolloLogger;
