import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { randomUUID } from "crypto";

const taskSchema = new Schema(
  {
    id: {
      type: Schema.Types.UUID,
      required: true,
      unique: true,
      default: () => randomUUID(),
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
    },
    priority: {
      type: Schema.Types.String,
      enum: ["low", "medium", "high"],
    },
    status: {
      type: Schema.Types.String,
      enum: ["todo", "in-progress", "completed"],
      required: true,
    },
    tags: {
      type: [Schema.Types.String],
      maxLength: 50,
    },
  },
  {
    strict: "throw",
  }
);

taskSchema.virtual("_id").get(function () {
  return this.id;
});

taskSchema.set("toObject", { virtuals: true });
taskSchema.set("toJSON", { virtuals: true });

const Task = model("Task", taskSchema);

export default Task;
