import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ResponsiveNavbar from "../ResponsiveNavbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import User from "../user/getuser/User";

const Master = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <ResponsiveNavbar />
        <Container className="mt-5">
          <Row>
            <Outlet />
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Master;
