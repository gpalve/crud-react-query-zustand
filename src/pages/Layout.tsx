import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="my-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
