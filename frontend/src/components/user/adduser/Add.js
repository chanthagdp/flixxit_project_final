import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // set validated to form.checkValidity();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    // End set validated

    await axios
      .post("http://localhost:8000/api/create", user)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/user");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h3>Add new user</h3>

          <Form noValidate validated={validated} onSubmit={submitForm}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                id="fname"
                autoComplete="off"
                required="required"
                onChange={inputHandler}
                placeholder="Please enter first name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                id="lname"
                autoComplete="off"
                required="required"
                onChange={inputHandler}
                placeholder="Please enter last name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid last name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required="required"
                onChange={inputHandler}
                placeholder="Please enter email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                required="required"
                onChange={inputHandler}
                placeholder="Please enter password"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid last name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Link to={"/"} className="btn btn-danger">
                Back
              </Link>
              &nbsp;&nbsp;
              <Button type="submit" variant="primary">
                ADD USER
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Add;
