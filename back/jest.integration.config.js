const jestFolders = require("./jest.folders");
const config = require("./jest.config");

config["testMatch"] = jestFolders.inte.glob;
config["testPathIgnorePatterns"] = ["/node_modules/", "/build/"];

if (process.env.CI) {
  config["reporters"] = [
    [
      "jest-junit",
      {
        outputDirectory: "reports",
        outputName: "junit-integration.xml",
      },
    ],
  ];
}

module.exports = config;
