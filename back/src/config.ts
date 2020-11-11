import { config } from "dotenv";
import path = require("path");

// Load local before because config doesn't override other config info
[".env.local", ".env"].forEach((filename) => {
  config({
    path: path.resolve(process.cwd(), filename),
  });
});
