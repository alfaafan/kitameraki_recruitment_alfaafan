import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Task Management App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/tasks"}>Tasks</Link>
          </li>
          <li>
            <Link to={"/tasks/create"}>Create new task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
