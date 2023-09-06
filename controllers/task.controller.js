import { createTaskService } from "../services/createTask.service.js";
import { deleteTaskService } from "../services/deleteTask.service.js";
import { getPaginatedTasksService } from "../services/getPaginatedTasks.service.js";
import { getTaskByIdService } from "../services/getTaskById.service.js";
import { getTasksService } from "../services/getTasks.service.js";
import { patchTaskService } from "../services/patchTask.service.js";
import { error, success } from "../utils/apiResponse.js";
import { v4 as uuidv4 } from "uuid";

export const getAllTasks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const tasks = await getPaginatedTasksService(page, pageSize);
    res.status(200).json(success("Tasks retrieved", tasks));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params._id;
    const task = await getTaskByIdService(taskId);

    if (!task) {
      return res.status(404).json(error("Task not found"));
    }

    res.status(200).json(success("Task retrieved", task));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const postTask = async (req, res) => {
  try {
    const task = {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      priority: req.body.priority,
      status: req.body.status,
      tags: req.body.tags,
    };

    const newTask = await createTaskService(task);

    res.status(201).json(success("Task created", newTask));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const patchTask = async (req, res) => {
  try {
    const taskId = req.params._id;
    const updatedTask = req.body;

    if (Object.keys(updatedTask).length === 0) {
      return res.status(400).json(error("No fields to update provided"));
    }

    const patchedTask = await patchTaskService(taskId, updatedTask);
    res.status(200).json(success("Task updated", patchedTask));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params._id;
    const deletedTask = await deleteTaskService(taskId);

    res.status(204).json(success("Task deleted"));
  } catch (e) {
    res.status(500).json(error(e.message));
  }
};
