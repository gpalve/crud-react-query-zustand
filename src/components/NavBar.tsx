import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { headerStyle, headerStyleActive } from "../styles";
import useEmployeeStore from "../store";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.pathname.split("/").pop();
  const resetToken = useEmployeeStore((s) => s.resetToken);
  const hasToken = useEmployeeStore((s) => s.hasToken);

  const handleLogOut = () => {
    resetToken();
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={query === "" ? headerStyleActive : headerStyle}>
            🙃 CRUD React+TS
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="mission"
                style={query === "mission" ? headerStyleActive : headerStyle}
              >
                🚀 Mission
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="about"
                style={query === "about" ? headerStyleActive : headerStyle}
              >
                ✨ About
              </Link>
            </Nav.Link>
            {hasToken() && (
              <Nav.Link>
                <Link to="/login" onClick={handleLogOut} style={headerStyle}>
                  🔻 Logout
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
