import express from "express";
import { deleteTask, getAllTasks, getTaskById, patchTask, postTask } from "../controllers/task.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const tasksRouter = express.Router();

tasksRouter.get("/", verifyToken, getAllTasks);
tasksRouter.get("/:_id", verifyToken, getTaskById);
tasksRouter.post("/", verifyToken, postTask);
tasksRouter.patch("/:_id", verifyToken, patchTask);
tasksRouter.delete("/:_id", verifyToken, deleteTask);

export { tasksRouter };
