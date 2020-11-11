import { getNamespace } from "cls-hooked";
import find from "find-package-json";
import path from "path";
import { createLogger, format, transports } from "winston";

const root = path.dirname(find(module).next().filename || "");

const tracing = format((info) => {
  const webContext = getNamespace("web");
  if (webContext) {
    ["spanId", "clientVersion"].forEach((key) => {
      if (webContext.get(key)) {
        info.metadata[key] = webContext.get(key);
      }
    });
  }
  return info;
});

const errors = format((info) => {
  if (info.metadata.err instanceof Error) {
    info.metadata.err = {
      name: info.metadata.err.name,
      message: info.metadata.err.message,
      stack: info.metadata.err.stack,
    };
  }
  return info;
});

const rootLogger = createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: format.combine(
    format.metadata(),
    format.timestamp(),
    errors(),
    tracing(),
    process.env.NODE_ENV === "production" ? format.json() : format.prettyPrint()
  ),

  transports: [new transports.Console()],
});

const extractModuleId = (module: NodeModule) => {
  let moduleId = module.id;
  if (path.isAbsolute(moduleId)) {
    moduleId = path.relative(root, moduleId).replace(/\\/g, "/");
    if (moduleId.startsWith("build/")) {
      moduleId = moduleId.substring("build".length);
    } else if (moduleId.startsWith("src/")) {
      moduleId = moduleId.substring("src".length);
    }
  }

  return moduleId;
};

const logger = (module: NodeModule) => {
  const moduleId = extractModuleId(module);
  return rootLogger.child({ module: moduleId });
};

export default logger;
