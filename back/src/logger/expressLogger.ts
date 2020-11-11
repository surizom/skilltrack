import { createNamespace } from "cls-hooked";
import { Request, RequestHandler, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import logger from ".";

const CLIENT_VERSION_HEADER = "X-Client-Version";

const webContext = createNamespace("web");
const log = logger(module);

const identifyLevel = (req: Request, res: Response) => {
  if (!req.err) {
    return "debug";
  }

  if (res.statusCode < 500) {
    return "warn";
  }

  return "error";
};

export const expressLoggerCreator = (gqlPath: string): RequestHandler => (
  req,
  res,
  next
) => {
  const spanId = uuidv4();
  const start = process.hrtime.bigint();

  // Follow request action inside the app with the SpanId
  res.header("X-Span-Id", spanId);

  // Add header with application version to help debug
  res.header("X-Version", process.env.BUILD_SHA || "dev");

  res.on("finish", () => {
    // Graphql has its own logger
    if (req.originalUrl.startsWith(gqlPath)) {
      return;
    }

    const time = Number((process.hrtime.bigint() - start) / BigInt(1000000));
    const metadata: { [key: string]: string | number } = {
      time,
    };
    if (req.err) {
      metadata.err = req.err;
    }

    log.log(
      identifyLevel(req, res),
      `${req.method} ${req.originalUrl} > ${res.statusCode}`,
      {
        ...metadata,
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        route: req.baseUrl + req.route?.path,
      }
    );
  });

  const clientVersionHeader = req.get(CLIENT_VERSION_HEADER);

  webContext.run(() => {
    webContext.set("spanId", spanId);
    if (clientVersionHeader) {
      webContext.set("clientVersion", clientVersionHeader);
    }
    next();
  });
};
