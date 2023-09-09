import React from "react";
import convertTimestampToDateFormat from "../utils/formatDate";

function TaskItem({ title, description, dueDate, priority, status }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{description}</p>
        <div className="flex justify-between my-3">
          <div className="badge badge-outline badge-success">{priority}</div>
          <div className="badge badge-outline badge-warning">{status}</div>
        </div>
        <p className="text-gray-300 mb-2">
          <strong className="text-white">Due date: </strong>
          {convertTimestampToDateFormat(dueDate)}
        </p>
        <div className="flex gap-2">
          <button className="btn btn-ghost">Edit</button>
          <button className="btn btn-ghost">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
