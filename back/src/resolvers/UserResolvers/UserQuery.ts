import { Arg, Ctx, ID, Query, Resolver } from "type-graphql";
import { GraphqlContext } from "../../context";
import { User } from "../../entity/User";
import { getActiveUserOrFail } from "./utils";

@Resolver(() => User)
export class UserQuery {
  @Query(() => User)
  async user(@Arg("id", () => ID) id: string, @Ctx() { db }: GraphqlContext) {
    return await getActiveUserOrFail(db, id);
  }
}
