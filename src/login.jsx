import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
{ /*login*/ }
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back! 🎉 Logged in as: ${formData.email}`);
    setFormData({ email: "", password: "" });
  };

  return (
    <Container className="login-page d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow-lg border-0 rounded-4 login-card">
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: "#198754", fontWeight: "bold" }}>
                🔑 Login
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 login-btn">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <a href="/register" className="text-success fw-bold">
                  Create an Account
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;