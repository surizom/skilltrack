import request from "supertest";
import { connectBeforeAll } from "./utils";

describe("App can start", () => {
  const connection = connectBeforeAll();

  it("GET /debug/health", async () => {
    const buildApp = (await import("../app")).createApp;

    const app = buildApp(connection.current!);
    const res = await request(app).get("/api/debug/health");
    expect(res.body.db).toEqual("ok");
  }, 60_000);
});
