import { Repositories } from "./tools/RepositoryType";

declare module "express-serve-static-core" {
  export interface Request {
    context?: {
      db: Repositories;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    err?: any;
  }
}
