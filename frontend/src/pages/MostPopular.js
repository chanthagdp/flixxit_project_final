import React from "react";
import { Card, Button, Row } from "react-bootstrap";

const MostPopular = () => {
  return (
    <Row>
      <h3 className="text-3xl font-bold tracking-tight text-gray-900">
        Most Popular
      </h3>
      <hr />
      <div class="d-flex flex-row bd-highlight mb-4">
        <div class="p-2 bd-highlight">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/flixxit-M-01.jpg" />
            <Card.Body>
              <Card.Title>Title View:...</Card.Title>
              <Card.Text>
                <ul>
                  <li>Title View:...</li>
                  <li>Description of title:...</li>
                  <li>Year:...</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="p-2 bd-highlight">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/flixxit-M-02.jpg" />
            <Card.Body>
              <Card.Title>Title View:...</Card.Title>
              <Card.Text>
                <ul>
                  <li>Title View:...</li>
                  <li>Description of title:...</li>
                  <li>Year:...</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="p-2 bd-highlight">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/flixxit-M-03.jpg" />
            <Card.Body>
              <Card.Title>Title View:...</Card.Title>
              <Card.Text>
                <ul>
                  <li>Title View:...</li>
                  <li>Description of title:...</li>
                  <li>Year:...</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="p-2 bd-highlight">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/flixxit-M-04.jpg" />
            <Card.Body>
              <Card.Title>Title View:...</Card.Title>
              <Card.Text>
                <ul>
                  <li>Title View:...</li>
                  <li>Description of title:...</li>
                  <li>Year:...</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Row>
  );
};

export default MostPopular;
