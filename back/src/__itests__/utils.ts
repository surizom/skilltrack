import { Connection, createConnection, getConnectionOptions } from "typeorm";
import logger from "../logger";
import TypeormAdapter from "../logger/TypeormAdapter";

const log = logger(module);

export async function getTestConnection() {
  const conectionOptions = await getConnectionOptions();
  return createConnection({
    ...conectionOptions,
    dropSchema: true,
    logger: new TypeormAdapter(log),
  });
}

export function connectBeforeAll() {
  const connection: { current?: Connection } = {};

  beforeAll(async () => {
    connection.current = await getTestConnection();
  });

  afterAll(async () => {
    await connection.current!.close();
  });

  return connection;
}
