import { UserInputError } from "apollo-server-express";
import { Arg, Ctx, ID, Mutation } from "type-graphql";
import { GraphqlContext } from "../../context";
import { User } from "../../entity/User";
import { CreateUserInput, UserCreated } from "./types";
import { createUser, removeUser } from "./utils";

export class UserMutation {
  @Mutation(() => UserCreated)
  createUser(
    @Ctx() { db }: GraphqlContext,
    @Arg("data") data: CreateUserInput
  ) {
    return createUser(data, db);
  }

  @Mutation(() => User, { nullable: true })
  async removeUser(
    @Arg("id", () => ID) id: string,
    @Ctx() { db }: GraphqlContext
  ) {
    const userRemoved = await removeUser(id, db);
    if (!userRemoved) {
      throw new UserInputError("User not found");
    }
    return userRemoved;
  }
}
