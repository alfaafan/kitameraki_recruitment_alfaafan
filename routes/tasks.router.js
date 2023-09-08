import express from "express";
import { deleteTask, getAllTasks, getTaskById, patchTask, postTask } from "../controllers/task.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const tasksRouter = express.Router();

tasksRouter.get("/", verifyToken, getAllTasks);
tasksRouter.get("/:_id", getTaskById);
tasksRouter.post("/", postTask);
tasksRouter.patch("/:_id", patchTask);
tasksRouter.delete("/:_id", deleteTask);

export { tasksRouter };
