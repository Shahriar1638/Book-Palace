import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home/Home";
import Errorpage from "../Errorpage/Errorpage";
import GeneralUserLayout from "../Layout/GeneralUserLayout";
import Login from "../Shared/Login And registration/Login";
import Signup from "../Shared/Login And registration/Signup";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <GeneralUserLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    }
  ]);

export default routes;