import { NonEmptyArray } from "type-graphql";
import { UserMutation } from "./UserMutation";
import { UserQuery } from "./UserQuery";

export const UserResolvers: NonEmptyArray<Function> = [UserQuery, UserMutation];
