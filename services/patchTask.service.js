import Task from "../models/task.model.js";

export const patchTaskService = async (taskId, updatedTask) => {
  return await Task.findByIdAndUpdate(taskId, updatedTask, { new: true });
};
