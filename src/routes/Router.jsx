import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Profile from "../pages/Profile";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: (
      <div>
        <Helmet>
          <title> Error || page</title>
        </Helmet>
        <header className="w-11/12 mx-auto">
          <Header></Header>
        </header>
        <main
          className="w-11/12 mx-auto flex justify-center items-center"
          style={{
            minHeight: "calc(100vh - 236px)",
          }}
        >
          {" "}
          Error Page
        </main>
        <footer className="bg-base-200 ">
          <Footer></Footer>
        </footer>
      </div>
    ),
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
