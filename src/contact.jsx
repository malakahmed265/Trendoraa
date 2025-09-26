import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container className="my-5 contact-page">
      <h1 className="text-center mb-4" style={{ color: "#198754", fontWeight: "bold" }}>
        Contact Us
      </h1>
      <p className="text-center mb-5" style={{ color: "#555", fontSize: "1.1rem" }}>
        Have a question or want to get in touch? Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded-4" style={{ background: "#f8fff7" }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;