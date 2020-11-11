import { format } from "date-fns";
import { User } from "../../entity/User";
import {
  NotFoundError,
  NotFoundErrorMessages,
} from "../../Errors/RestErrors/NotFoundError";
import { Repositories } from "../../tools/RepositoryType";
import { CreateUserInput } from "./types";

export const formatDate = (date: Date): string => format(date, "yyyy-MM-dd");

export async function getActiveUserOrFail(db: Repositories, userId: string) {
  const user = await db.userRepository.findOne({
    id: userId,
  });
  if (!user) {
    throw new NotFoundError(NotFoundErrorMessages.UserNotFound);
  }
  return user;
}

export async function createUser(data: CreateUserInput, db: Repositories) {
  const userInCreation = new User();
  userInCreation.username = data.username;
  const user = await db.userRepository.save(userInCreation);
  return { user };
}

export async function removeUser(id: string, db: Repositories) {
  const userToDelete = await db.userRepository.findOne({
    id,
  });
  if (!userToDelete || !!userToDelete.deletedAt) {
    return userToDelete;
  }
  userToDelete.deletedAt = formatDate(new Date());

  return db.userRepository.save(userToDelete);
}
