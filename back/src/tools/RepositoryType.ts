import { EntityManager, Repository } from "typeorm";
import { User } from "../entity/User";

export interface Repositories {
  entityManager: EntityManager;
  userRepository: Repository<User>;
}
