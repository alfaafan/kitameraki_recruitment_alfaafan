import Task from "../models/task.model.js";

export const getTaskById = async (id) => {
  return await Task.findById(id);
};
