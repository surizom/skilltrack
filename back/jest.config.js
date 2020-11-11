const folders = require("./jest.folders");
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/build/"].concat(
    folders.inte.path
  ),
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotResolver: "<rootDir>/jest.snapshotResolver.js",
};

if (process.env.CI) {
  config["reporters"] = [["jest-junit", { outputDirectory: "reports" }]];
}

module.exports = config;
