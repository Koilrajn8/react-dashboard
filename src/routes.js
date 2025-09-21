
import { createBrowserRouter } from "react-router-dom";
import DashboardItems from "./modules/dashboard-content";
import Layout from "./modules/layout/Layout";
import OrderListTable from "./modules/order-list-table/order-list-table";
import NotFound from "./not-found";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardItems /> }, // default route
      { path: "/order-list", element: <OrderListTable /> },
      { path: "*", element: <NotFound /> }, // catch-all for 404
    ],
  },
]);