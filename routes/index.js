import express from "express";
import { tasksRouter } from "./tasks.router.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import swaggerUi from "swagger-ui-express";
import { userRouter } from "./user.router.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerDocumentPath = path.join(__dirname, "openapi.json");
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerDocumentPath, "utf8"));

router.use("/user", userRouter);
router.use("/tasks", tasksRouter);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
