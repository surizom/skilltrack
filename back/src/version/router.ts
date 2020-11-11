import express from "express";

const router = express.Router();

interface VersionResponse {
  // Version number for backend
  backVersion: string;
  backSha: string;
}

router.get("/", (req, res) => {
  const backVersion = process.env.BUILD_TAG!;
  const backSha = process.env.BUILD_SHA!;

  const response: VersionResponse = {
    backVersion,
    backSha,
  };

  res.send(response);
});

export default router;
