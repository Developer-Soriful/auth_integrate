import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Profile from "../pages/Profile";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Apps,
        loader: () => fetch("/app_data.json"),
      },
    ],
  },
  {
    path: "/profile",
    Component: Profile,
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
    path: "/appdetails/:id",
    element: (
      <PrivateRoute>
        <AppDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/app_data.json"),
  },
]);
