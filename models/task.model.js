import mongoose from "mongoose";
const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
      required: true,
      unique: true,
      description: "Unique identifier for the task",
    },
    title: {
      type: Schema.Types.String,
      required: true,
      maxLength: 100,
      description: "Title of the task",
    },
    description: {
      type: Schema.Types.String,
      maxLength: 1000,
      description: "Description of the task",
    },
    dueDate: {
      type: Schema.Types.Date,
      description: "Due date and time for the task",
    },
    priority: {
      type: Schema.Types.String,
      enum: ["low", "medium", "high"],
      description: "Priority level of the task",
    },
    status: {
      type: Schema.Types.String,
      enum: ["todo", "in-progress", "completed"],
      description: "Status of the task",
      required: true,
    },
    tags: {
      type: [Schema.Types.String],
      maxLength: 50,
      description: "Tags associated with the task",
    },
  },
  {
    strict: "throw",
  }
);

const Task = model("Task", taskSchema);

export default Task;
