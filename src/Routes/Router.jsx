import { createBrowserRouter } from "react-router";
import Root from "./../MainLayout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
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
