import express from "express";
import { deleteTask, getAllTasks, getTaskById, patchTask, postTask } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const tasksRouter = express.Router();

tasksRouter.get("/", authMiddleware, getAllTasks);
tasksRouter.get("/:_id", authMiddleware, getTaskById);
tasksRouter.post("/", authMiddleware, postTask);
tasksRouter.patch("/:_id", authMiddleware, patchTask);
tasksRouter.delete("/:_id", authMiddleware, deleteTask);

export { tasksRouter };
