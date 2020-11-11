/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { gql } from "apollo-server-express";
import { Express } from "express";
import { print } from "graphql/language/printer";
import request from "supertest";
import { User } from "../../entity/User";
import { buildRepositories } from "../../tools/buildRepository";
import { Repositories } from "../../tools/RepositoryType";
import { createUser } from "../data-utils";
import { connectBeforeAll } from "../utils";

describe("Check if user deletion works", () => {
  const connection = connectBeforeAll();
  let db: Repositories;

  let userTest: User;

  let app: Express | undefined;
  let GQL_PATH: string | undefined;

  const removeUserGql = gql`
    mutation removeUser($id: ID!) {
      removeUser(id: $id) {
        id
        deletedAt
      }
    }
  `;

  beforeAll(async () => {
    db = buildRepositories(connection.current!.manager);

    userTest = (await createUser(db)).user;

    const { createApp, GQL_PATH: gp } = await import("../../app");

    GQL_PATH = gp;
    app = createApp(connection.current!);
  });

  it("Deletion is working", async () => {
    const res = await request(app)
      .post(GQL_PATH!)
      .send({
        operationName: "removeUser",
        query: print(removeUserGql),
        variables: { id: userTest.id },
      });
    expect(res.body.data.removeUser.id).toBe(userTest.id);
  });

  it("Deletion is working: don't delete already deleted data", async () => {
    const res = await request(app)
      .post(GQL_PATH!)
      .send({
        operationName: "removeUser",
        query: print(removeUserGql),
        variables: { id: userTest.id },
      });
    expect(res.body.data.removeUser.id).toBe(userTest.id);
  });
});
