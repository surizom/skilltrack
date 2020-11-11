import express, { Request } from "express";
import asyncHandler from "express-async-handler";
import { timeout } from "promise-timeout";

const router = express.Router();

router.get("/error", () => {
  throw new Error("Damned");
});

router.get(
  "/slow",
  asyncHandler(async (req, res) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1234);
    });
    res.sendStatus(200);
  })
);

router.get(
  "/async-error",
  asyncHandler(async (_req, _res) => {
    await Promise.resolve();
    throw new Error("Async damned");
  })
);

router.get("/echo", (req, res) => {
  return res.status(200).send({
    headers: req.headers,
  });
});

enum SubServiceStatus {
  UNKNOWN = "unknown",
  OK = "ok",
  KO = "ko",
  TIMEOUT = "timeout",
}

async function checkDb(req: Request): Promise<SubServiceStatus> {
  try {
    await req.context?.db.entityManager.query(`SELECT 1`);
    return SubServiceStatus.OK;
  } catch (e) {
    return SubServiceStatus.KO;
  }
}

interface HealthCheckResponse {
  db: SubServiceStatus;
}

type SubServices = keyof HealthCheckResponse;

router.get(
  "/health",
  asyncHandler(async (req, res) => {
    const check: HealthCheckResponse = {
      db: SubServiceStatus.UNKNOWN,
    };

    const checkers: {
      [subService in SubServices]: (req: Request) => Promise<SubServiceStatus>;
    } = {
      db: checkDb,
    };

    const promises = Object.keys(checkers).map((subService: SubServices) => {
      return timeout(checkers[subService](req), 2000)
        .catch(() => SubServiceStatus.TIMEOUT)
        .then((status) => (check[subService] = status));
    });

    await Promise.all(promises);

    const notOk = Object.values(check).find(
      (status) => status !== SubServiceStatus.OK
    );

    return res.status(notOk ? 500 : 200).send(check);
  })
);

export default router;
