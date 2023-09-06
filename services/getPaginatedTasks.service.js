import Task from "../models/task.model.js";

export const getPaginatedTasksService = async (page, pageSize) => {
  try {
    const totalTasks = await Task.countDocuments();
    const paginatedTasks = await Task.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    return {
      tasks: paginatedTasks,
      currentPage: page,
      totalPages: Math.ceil(totalTasks / pageSize),
    };
  } catch (e) {
    throw new Error("Unable to fetch tasks");
  }
};
