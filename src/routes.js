
import { createBrowserRouter } from "react-router-dom";
import Layout from "./modules/layout/Layout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <></> }, // default route
    //   { path: "*", element: <NotFound /> }, // catch-all for 404
    ],
  },
]);