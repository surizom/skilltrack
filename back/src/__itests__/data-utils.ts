import { User } from "../entity/User";
import { Repositories } from "../tools/RepositoryType";

export const createUser = async (db: Repositories) => {
  const { userRepository } = db;

  const user = new User();
  user.username = "JeanDurand";

  await userRepository.save(user);

  return { user };
};
