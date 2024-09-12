import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home/Home";
import Errorpage from "../Errorpage/Errorpage";
import GeneralUserLayout from "../Layout/GeneralUserLayout";
import Login from "../Shared/Login And registration/Login";
import Signup from "../Shared/Login And registration/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminHome from "../Pages/AdminPages/Admin Home/AdminHome";
import ReportedPosts from "../Pages/AdminPages/Reported Posts/ReportedPosts";
import PendingBooks from "../Pages/AdminPages/Pending Bookss/PendingBooks";
import PostMenu from "../Pages/Forums/Load Post/PostMenu";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <GeneralUserLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/communityforums",
          element: <PostMenu></PostMenu>
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
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      errorElement: <Errorpage />,
      children:[
        {
          path: "/dashboard/home",
          element: <AdminHome />,
        },
        {
          path: "/dashboard/reportedposts",
          element: <ReportedPosts />,
        },
        {
          path: "/dashboard/pendingbooks",
          element: <PendingBooks />,
        }
      ]
    }
  ]);

export default routes;