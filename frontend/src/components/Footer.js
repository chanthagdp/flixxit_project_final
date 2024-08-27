import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary mt-auto">
      <Container className="p-3">
        <Row>
          <Col className="text-center">
            <Link to={"/"} className="text-light text-decoration-none">
              © 2024 Flixxit-AUPP
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
