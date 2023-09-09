import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center gap-8">
        <h1 className="text-6xl font-bold text-center">Welcome to Task Management App!</h1>
        <div className="flex gap-3">
          <button className="btn btn-ghost">
            <Link to={"/tasks"}>View tasks</Link>
          </button>
          <button className="btn btn-ghost">
            <Link to={"/tasks/create"}>Create a new task</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
