import { cleanSqlParams } from "./TypeormAdapter";

describe("adapts typeorm logging", () => {
  it("handles empty params", () => {
    expect(cleanSqlParams(undefined)).toEqual([]);
    expect(cleanSqlParams([])).toEqual([]);
  });

  it("handles regular size params", () => {
    expect(
      cleanSqlParams([
        "a",
        new Date(Date.parse("2020-05-01T15:17:50.728Z")),
        42,
      ])
    ).toEqual(["a", "2020-05-01T15:17:50.728Z", 42]);
  });

  it("handles params too big to be displayed", () => {
    const veryLongParam = "a".repeat(10000);
    expect(cleanSqlParams(["a", veryLongParam, "c"])).toEqual([
      "a",
      "[Truncated (10000)]",
      "c",
    ]);
  });

  it("handles bad types", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const a: any = {};
    const b = { a };
    a.b = b;
    expect(cleanSqlParams(["a", a, "c"])).toEqual([
      "a",
      "[Error (TypeError: Converting circular structure)]",
      "c",
    ]);
  });
});
