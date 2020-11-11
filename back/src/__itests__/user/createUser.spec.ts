import { gql } from "apollo-server-express";
import { print } from "graphql/language/printer";
import request from "supertest";
import { validate } from "uuid";
import { CreateUserInput } from "../../resolvers/UserResolvers/types";
import { connectBeforeAll } from "../utils";

describe("Check createUser mutation", () => {
  const connection = connectBeforeAll();

  let app: Express.Application | undefined;
  let GQL_PATH: string | undefined;

  const query = gql`
    mutation createUser($user: CreateUserInput!) {
      createUser(data: $user) {
        user {
          id
        }
      }
    }
  `;

  beforeAll(async () => {
    const { createApp, GQL_PATH: gp } = await import("../../app");

    GQL_PATH = gp;
    app = createApp(connection.current!);
  });

  it("check creation of user works", async () => {
    const data: CreateUserInput = {
      username: "test",
    };
    const res = await request(app)
      .post(GQL_PATH!)
      .send({
        operationName: "createUser",
        query: print(query),
        variables: {
          user: data,
        },
      });
    expect(validate(res.body.data.createUser.user.id)).toBe(true);
  });
});
