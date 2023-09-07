import request from "supertest";
import app from "../index.js";

describe("Testing API endpoints", () => {
  const taskData = {
    title: "Testing API",
    description: "Testing API so the API can work properly",
    priority: "high",
    status: "todo",
    tags: ["homework", "testing"],
  };

  let taskId;

  it("should create a new task", async () => {
    const response = await request(app).post("/api/v1/tasks").send(taskData).expect(201);

    expect(response.body.data).toHaveProperty("title", taskData.title);
    expect(response.body.data).toHaveProperty("description", taskData.description);
    expect(response.body.data).toHaveProperty("priority", taskData.priority);
    expect(response.body.data).toHaveProperty("status", taskData.status);
    expect(response.body.data).toHaveProperty("tags", taskData.tags);

    taskId = response.body.data._id;
  });

  it("should fetch all tasks", async () => {
    const response = await request(app).get("/api/v1/tasks").expect(200);

    expect(response.body.data.tasks).toBeInstanceOf(Array);
    expect(response.body.data.tasks.length).toBeGreaterThan(0);
  });

  it("should fetch a task by id", async () => {
    const response = await request(app).get(`/api/v1/tasks/${taskId}`).expect(200);

    expect(response.body.data).toBeInstanceOf(Object);
  });

  it("should patch update a task by id", async () => {
    const updatedTaskData = {
      title: "Update task",
      status: "in-progress",
    };

    const response = await request(app).patch(`/api/v1/tasks/${taskId}`).send(updatedTaskData).expect(200);

    expect(response.body.data).toHaveProperty("title", updatedTaskData.title);
    expect(response.body.data).toHaveProperty("status", updatedTaskData.status);
  });

  it("should delete a task by id", async () => {
    const response = await request(app).delete(`/api/v1/tasks/${taskId}`).expect(204);
  });
});
