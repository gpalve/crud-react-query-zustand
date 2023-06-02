import { RouteObject, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SingleEmployee from "./pages/SingleEmployee";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Protected from "./components/Protected";

const isAuthenticated = () => {
  // Check if the user is logged in by validating the token or any other mechanism
  const token = localStorage.getItem("token");
  return !!token;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Protected isAuthenticated={isAuthenticated()}>
            <HomePage />
          </Protected>
        ),
      },
      { path: "employee/:id", element: <SingleEmployee /> },
      { path: "mission", element: <Mission /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
