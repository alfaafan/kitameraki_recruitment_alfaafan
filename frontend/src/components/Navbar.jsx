import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar bg-base-100 container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Task Management App
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 me-5">
          <Link to={"/tasks"} className="text-white hover:text-gray-300">
            Tasks
          </Link>
          <Link to={"/tasks/create"} className="text-white hover:text-gray-300">
            Create new task
          </Link>
        </div>
        <div className="md:hidden me-5">
          <button className="text-white hover:text-gray-300" onClick={toggleMenu}>
            Menu
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-base-100 py-2">
          <ul className="text-end pe-7">
            <li>
              <Link to={"/tasks"} className="block text-white py-2 hover:text-gray-300" onClick={toggleMenu}>
                Tasks
              </Link>
            </li>
            <li>
              <Link to={"/tasks/create"} className="block text-white py-2 hover:text-gray-300" onClick={toggleMenu}>
                Create new task
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
