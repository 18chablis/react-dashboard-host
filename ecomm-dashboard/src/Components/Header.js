import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  let user = JSON.parse(localStorage.getItem("user-info"));
  function logOut() {
    localStorage.clear();
    history.push("/register");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Dashboard</Navbar.Brand>
        {localStorage.getItem("user-info") ? (
          <Nav className="mr-auto">
            <NavDropdown title="Products" id="nav-dropdown">
              <Link className="dropdown-item" to="/addProduct">
                Add Products
              </Link>
              <Link className="dropdown-item" to="/updateProduct">
                Update Products
              </Link>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="justify-content-end navbar_wrapper_right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        )}
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Setting</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;