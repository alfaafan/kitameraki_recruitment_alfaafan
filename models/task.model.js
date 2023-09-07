import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { v4 as uuidv4 } from "uuid";

const taskSchema = new Schema(
  {
    _id: {
      type: Schema.Types.String,
      required: true,
      default: uuidv4,
    },
    title: {
      type: Schema.Types.String,
      required: true,
      maxLength: 100,
    },
    description: {
      type: Schema.Types.String,
      maxLength: 1000,
    },
    dueDate: {
      type: Schema.Types.Date,
      default: () => Date.now(),
    },
    priority: {
      type: Schema.Types.String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    status: {
      type: Schema.Types.String,
      enum: ["todo", "in-progress", "completed"],
      required: true,
      default: "todo",
    },
    tags: {
      type: [Schema.Types.String],
      maxLength: 50,
    },
  },
  {
    strict: "throw",
    timestamps: true,
  }
);

const Task = model("Task", taskSchema);

export default Task;
