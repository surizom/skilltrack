import { EntityManager } from "typeorm";
import { User } from "../entity/User";
import { Repositories } from "./RepositoryType";

export const buildRepositories = (
  entityManager: EntityManager
): Repositories => {
  return {
    entityManager,
    userRepository: entityManager.getRepository(User),
  };
};
