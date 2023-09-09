import Task from "../models/task.model.js";

export const deleteTaskService = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
