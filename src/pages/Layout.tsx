import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const allowNavbar = path.endsWith("login") || path.endsWith("register");
  return (
    <div>
      {allowNavbar ? "" : <NavBar />}
      <div className="container">
        <div className="my-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
