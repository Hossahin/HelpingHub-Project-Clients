import { createBrowserRouter } from "react-router";
import Root from "./../MainLayout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AllVolunteerNeedposts from "../Pages/AllVolunteerNeedposts/AllVolunteerNeedposts";
import AddVolunteerNeedPost from "../Pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import ManageMyPosts from "../Pages/ManageMyPosts/ManageMyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "AllVolunteerNeedposts",
        Component: AllVolunteerNeedposts,
      },
      {
        path: "AddVolunteerNeedPost",
        Component: AddVolunteerNeedPost,
      },
      {
        path: "ManageMyPosts",
        Component: ManageMyPosts,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
]);

export default router;
