import { createConnection, getConnectionOptions } from "typeorm";
import { createApp, GQL_PATH } from "./app";
import logger from "./logger";

const log = logger(module);

async function startServer() {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection({
    ...connectionOptions,
    // Trick to log all requests
    // See https://github.com/typeorm/typeorm/issues/3302
    maxQueryExecutionTime: -1,
  });

  const app = createApp(connection);
  const port: number = Number(process.env.PORT) || 4000;
  app.listen(port, "0.0.0.0", () =>
    log.log("info", `Server ready at http://localhost:${port}${GQL_PATH}`)
  );
}

startServer().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("Deadly server error", err);
  process.exit(1);
});
