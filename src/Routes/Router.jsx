import { createBrowserRouter } from "react-router";
import Root from "./../MainLayout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import AllVolunteerNeedposts from "../Pages/AllVolunteerNeedposts/AllVolunteerNeedposts";
import AddVolunteerNeedPost from "../Pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import ManageMyPosts from "../Pages/ManageMyPosts/ManageMyPosts";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import VolunteerNeedPostDetailsPage from "../Pages/VolunteerNeedPostDetailsPage/VolunteerNeedPostDetailsPage";
import UpdateMyvolunteerneedpost from "../Pages/UpdateMyvolunteerneedpost/UpdateMyvolunteerneedpost";
import PrivetRoutes from "../Pages/PrivetRoutes/PrivetRoutes";

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
        element: (
          <PrivetRoutes>
            <AddVolunteerNeedPost />
          </PrivetRoutes>
        ),
      },
      {
        path: "AllVolunteerNeedposts/volunteerneedpostdetailspage/:id",
        element: (
          <PrivetRoutes>
            <VolunteerNeedPostDetailsPage />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-taupe-mu.vercel.app/AllVolunteerNeedposts/volunteerneedpostdetailspage/${params.id}`
          ),
      },
      {
        path: "ManageMyPosts",
        element: (
          <PrivetRoutes>
            <ManageMyPosts />
          </PrivetRoutes>
        ),
      },
      {
        path: "Myvolunteerneedpost/update/:id",
        Component: UpdateMyvolunteerneedpost,
        loader: ({ params }) =>
          fetch(
            `https://server-side-taupe-mu.vercel.app/AllVolunteerNeedposts/volunteerneedpostdetailspage/${params.id}`
          ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "*",
        Component: ErrorPages,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPages,
  },
]);

export default router;
