import { useRoutes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Products from "../components/Product";
import BestSeller from "../components/BestSeller";
import Laptop from "../components/Laptop";
import Desktop from "../components/Desktop";
import NoMatch from "../components/NoMatch";

const routes = [
  { path: "/", element: <Dashboard /> },
  {
    path: "/products",
    element: <Products />,
    children: [
      { index: true, element: <BestSeller /> },
      { path: "laptop", element: <Laptop /> },
      { path: "desktop", element: <Desktop /> },
    ],
  },
  { path: "*", element: <NoMatch /> },
];

export const AppRoutes = () => {
  return useRoutes(routes);
};
