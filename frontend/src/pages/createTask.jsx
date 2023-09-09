import React, { useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";

function CreateTask() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/tasks", newTask);
      setNewTask({
        title: "",
        description: "",
        priority: "",
        status: "",
        tags: [],
      });
      if (response.data.success) {
        alert("Task created, go to Tasks page to see");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="text-center text-5xl font-bold my-8">Create a new task</h2>
        <form method="POST" className="w-6/12 flex flex-col items-center" onSubmit={handleCreateTask}>
          <div className="form-control w-full max-w-xs gap-3">
            <label className="label">
              <span className="label-text">Title:</span>
            </label>
            <input type="text" placeholder="Task title" className="input input-bordered w-full max-w-xs" name="title" value={newTask.title} onChange={handleInputChange} />
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <input type="text" placeholder="Task Description" className="input input-bordered w-full max-w-xs" name="description" value={newTask.description} onChange={handleInputChange} />
            <label className="label">
              <span className="label-text">Priority:</span>
            </label>
            <select className="select select-bordered" name="priority" value={newTask.priority} onChange={handleInputChange} defaultValue="low">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <label className="label">
              <span className="label-text">Status:</span>
            </label>
            <select className="select select-bordered" name="status" value={newTask.status} onChange={handleInputChange} defaultValue="todo">
              <option value="todo">Todo</option>
              <option value="in-progress">In-progress</option>
              <option value="completed">Completed</option>
            </select>
            <label className="label">
              <span className="label-text">Tags:</span>
            </label>
            <input type="text" placeholder="Task tags" className="input input-bordered w-full max-w-xs" name="tags" value={newTask.tags} onChange={handleInputChange} />
            <button className="btn btn-ghost w-4/12 mt-2" onClick={handleCreateTask}>
              Create
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default CreateTask;
