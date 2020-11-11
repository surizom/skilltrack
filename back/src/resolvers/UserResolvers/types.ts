import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../../entity/User";

@ObjectType()
export class UserCreated {
  @Field(() => User)
  user: User;
}

@InputType()
export abstract class CreateUserInput {
  @Field()
  username: string;
}
