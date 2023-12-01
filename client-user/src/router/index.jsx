import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Layout from "../layout/Layout";
import Detail from "../views/Detail";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:slug",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
