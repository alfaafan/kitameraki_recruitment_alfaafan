import React from "react";
import convertTimestampToDateFormat from "../utils/formatDate";

function TaskItem({ title, description, dueDate, priority, status, tags }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{description}</p>
        <p className="text-white">Priority:</p>
        <div className="badge badge-outline badge-success">{priority}</div>
        <p className="text-white">Status:</p>
        <div className="badge badge-outline badge-warning">{status}</div>
        <p className="text-white">Tags:</p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div className="badge badge-outline" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <p className="text-gray-300 my-2">
          <strong className="text-white">Due date: </strong>
          {convertTimestampToDateFormat(dueDate)}
        </p>
        <div className="flex gap-2 mt-2">
          <button className="btn btn-ghost">Edit</button>
          <button className="btn btn-ghost">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
