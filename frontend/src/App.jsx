import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Navbar from "./components/Navbar";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/tasks/create",
    element: <CreateTask />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
