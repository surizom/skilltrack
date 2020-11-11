import { Logger, QueryRunner } from "typeorm";
import { Logger as WinstonLogger } from "winston";

const MAX_PARAMS = 25;
const MAX_SINGLE_PARAM_SIZE = 1000;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanSqlParams(params: any[] | undefined) {
  if (!params) {
    return [];
  }

  if (params.length > MAX_PARAMS) {
    return [`[Too many params (${params.length})]`];
  }

  return params.map((p) => {
    try {
      if (typeof p === "number") {
        return p;
      }

      if (p instanceof Date) {
        return p.toJSON();
      }

      let str = p;
      if (typeof p !== "string") {
        str = JSON.stringify(p);
      }

      if (str.length > MAX_SINGLE_PARAM_SIZE) {
        return `[Truncated (${str.length})]`;
      }
      return str;
    } catch (error) {
      // most probably circular objects in parameters
      return `[Error (${new String(error).substr(0, 40)})]`;
    }
  });
}

const SLOW_QUERY_MS = 1000;

export default class TypeormAdapter implements Logger {
  private queryLog: WinstonLogger;
  private schemaLog: WinstonLogger;
  private migrationLog: WinstonLogger;
  private defaultLog: WinstonLogger;

  constructor(logger: WinstonLogger) {
    this.queryLog = logger.child({ module: "db.query" });
    this.schemaLog = logger.child({ module: "db.schema" });
    this.migrationLog = logger.child({ module: "db.migration" });
    this.defaultLog = logger.child({ module: "db.default" });
  }

  logQuery(
    _query: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined
  ) {
    // No-op, we log all queries as slow queries
  }

  logQueryError(
    error: string,
    query: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined
  ) {
    this.queryLog.error(query, { error, params: cleanSqlParams(parameters) });
  }

  /**
   * We set typeorm's `maxQueryExecutionTime` at -1 so that all
   * queries are considered slow queries, which make it possible to retrieve
   * the execution time of every query and log them accordingly
   */
  logQuerySlow(
    time: number,
    query: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined
  ) {
    this.queryLog.log(time > SLOW_QUERY_MS ? "warn" : "debug", query, {
      time,
      params: cleanSqlParams(parameters),
    });
  }

  logSchemaBuild(message: string, _queryRunner?: QueryRunner | undefined) {
    this.schemaLog.info(message);
  }

  logMigration(message: string, _queryRunner?: QueryRunner | undefined) {
    this.migrationLog.info(message);
  }

  log(
    level: "log" | "info" | "warn",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message: any,
    _queryRunner?: QueryRunner | undefined
  ) {
    switch (level) {
      case "log":
        this.defaultLog.debug(message);
        break;
      case "info":
        this.defaultLog.info(message);
        break;
      case "warn":
        this.defaultLog.warn(message);
        break;
      default:
        throw new Error("Method not implemented.");
    }
  }
}
