import Task from "../models/task.model.js";

export const createTaskService = async (task) => {
  const newTask = new Task(task);
  return await newTask.save();
};
