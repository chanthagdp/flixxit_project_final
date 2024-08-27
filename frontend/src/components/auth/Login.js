import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password
      }
    
    );

      console.log(response);
      const token = response.data.token;
      // Set token in local storage or cookie
      localStorage.setItem('token', token);
      // Redirect to protected route
      // window.location.href = '/protected';


      navigate('/user');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;