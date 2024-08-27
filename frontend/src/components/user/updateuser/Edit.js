import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, user)
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
          <h3>Update user</h3>

          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="fname.ControlInput">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                id="fname"
                autoComplete="off"
                required="required"
                value={user.fname}
                onChange={inputChangeHandler}
                placeholder="Please enter first name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lname.ControlInput">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                id="lname"
                autoComplete="off"
                required="required"
                value={user.lname}
                onChange={inputChangeHandler}
                placeholder="Please enter last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email.ControlInput">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required="required"
                value={user.email}
                onChange={inputChangeHandler}
                placeholder="Please enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Link to={"/user"} className="btn btn-danger">
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

      {/* <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3></h3>
      <form className="addUserForm" onSubmit={submitForm}>
        
        
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE USER</button>
        </div>
      </form>
    </div> */}
    </>
  );
};

export default Edit;
