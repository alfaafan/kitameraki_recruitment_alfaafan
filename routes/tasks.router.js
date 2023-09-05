import express from "express";

const tasksRouter = express.Router();

tasksRouter.get("/", async (req, res) => {
  res.send("Tasks");
});

export { tasksRouter };
