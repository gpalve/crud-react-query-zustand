import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SingleEmployee from "./pages/SingleEmployee";
import Mission from "./components/Mission";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "employee/:id", element: <SingleEmployee /> },
      { path: "mission", element: <Mission /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
