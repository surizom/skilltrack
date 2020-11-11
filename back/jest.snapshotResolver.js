module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath.replace("app-build/src", "ts-src") + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace("ts-src", "app-build/src")
      .slice(0, -snapshotExtension.length),

  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck: "app-build/src/__itests__/example.test.js",
};
