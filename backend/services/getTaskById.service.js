import Task from "../models/task.model.js";

export const getTaskByIdService = async (id) => {
  return await Task.findById(id);
};
