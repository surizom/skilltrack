import { User } from "./entity/User";
import { Repositories } from "./tools/RepositoryType";

export interface AuthContext {
  user: User;
}

export interface GraphqlContext {
  db: Repositories;
  auth: AuthContext;
}
