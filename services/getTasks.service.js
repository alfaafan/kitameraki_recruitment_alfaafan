import Task from "../models/task.model.js";

export const getTasksService = async () => {
  return await Task.find();
};
