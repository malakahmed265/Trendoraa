import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* اللوجو */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="\img\26.jpeg "  
            alt="Logo"
            className="logo-img"
          />
          <span className="ms-2 fw-bold">Trendora </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="ms-auto">
            <BootstrapNav.Link as={Link} to="/">Home</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/about">About</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/shop">Shop All</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/contact">Contact</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/login">Login</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/cart">
              <FaShoppingCart /> Cart
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;