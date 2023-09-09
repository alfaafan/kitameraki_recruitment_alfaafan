import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import Layout from "../layout/Layout";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/tasks?page=${page}`);
      setTasks([...tasks, ...response.data.data.tasks]);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTasks();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(page + 1);
    }
  };

  return (
    <Layout>
      <h2 className="text-center text-5xl font-bold my-8">Task list</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {tasks.map((task) => (
          <TaskItem key={task._id} title={task.title} description={task.description} dueDate={task.dueDate} priority={task.priority} status={task.status} tags={task.tags} />
        ))}
      </div>
    </Layout>
  );
}

export default Tasks;
