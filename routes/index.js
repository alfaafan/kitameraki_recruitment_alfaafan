import express from "express";
import { tasksRouter } from "./tasks.router.js";
import fs from "fs/promises";
import { error } from "../utils/apiResponse.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use("/tasks", tasksRouter);
router.get("/openapi.json", async (req, res) => {
  const openApiSpecPath = path.join(__dirname, "openapi.json");

  try {
    const data = await fs.readFile(openApiSpecPath, "utf8");

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  } catch (e) {
    console.error("Error reading OpenAPI specification:", e);
    res.status(500).json(error(e.message));
  }
});

export default router;
