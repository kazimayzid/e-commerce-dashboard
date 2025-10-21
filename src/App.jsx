import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayout from "./components/rootlayout/Rootlayout";
import { Dashboard } from "./components/dashboard/Dashboard";
import Analytics from "./components/analytics/Analytics";
import Sales from "./components/sales/Sales";


const router = createBrowserRouter([
   {
    path: "/",
    element: < Rootlayout/>,
    children: [
      { index: true, Component: Dashboard },
      { path: "analytics", Component: Analytics},
      { path: "/sales", Component: Sales}
      
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
