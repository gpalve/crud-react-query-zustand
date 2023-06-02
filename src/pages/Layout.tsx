import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

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
