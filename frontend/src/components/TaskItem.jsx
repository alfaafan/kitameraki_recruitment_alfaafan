import React from "react";

function TaskItem({ title, description, dueDate, priority, status }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{dueDate}</p>
        <p>{priority}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default TaskItem;
