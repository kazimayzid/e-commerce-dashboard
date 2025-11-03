import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "./components/rootlayout/Rootlayout";
import { Dashboard } from "./components/dashboard/Dashboard";
import Analytics from "./components/analytics/Analytics";
import Sales from "./components/sales/Sales";
import Category from "./components/category/Category";
import SubCategory from "./components/subCategory/SubCategory";
import Product from "./components/product/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, Component: Dashboard },
      { path: "analytics", Component: Analytics },
      { path: "/sales", Component: Sales },
      { path: "category", Component: Category },
      { path: "subcategory", Component: SubCategory },
      { path: "product", Component: Product },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />,
    </>
  );
}

export default App;
