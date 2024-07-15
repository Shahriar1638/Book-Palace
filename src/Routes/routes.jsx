import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);