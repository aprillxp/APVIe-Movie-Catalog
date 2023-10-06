import { createBrowserRouter, redirect } from "react-router-dom";
import About from "../views/About";
import Dashboard from "../views/DashboardPage";
import Genre from "../views/GenrePage";
import Login from "../views/LoginPage";
import Register from "../views/RegisterPage";
import Layout from "../components/Layout";
import AddMovie from "../views/AddFormPage";
import EditFrom from "../views/EditForm";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        throw redirect("/login");
      }

      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/add-form",
        element: <AddMovie />,
      },
      {
        path: "/edit-form/:movieId",
        element: <EditFrom />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
]);
