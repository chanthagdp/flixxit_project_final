import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResponsiveNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand>Flixxit App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/home"} className="text-light text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/aboutUs"} className="text-light text-decoration-none">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/category"}
                className="text-light text-decoration-none"
              >
                Category
              </Link>
            </Nav.Link>
          </Nav>
          <Nav.Link>
            <Form className="d-flex mb-5 mb-lg-0">
              <Form.Control type="text" placeholder="Search" className="me-2" />
            </Form>
          </Nav.Link>
          <Nav>
            <Nav.Link>
              <Link to={"/login"} className="text-light text-decoration-none">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
