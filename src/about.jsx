import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5 about-page">
      <h1 className="text-center mb-4" style={{ color: "#198754", fontWeight: "bold" }}>
        About Us
      </h1>
      <p className="text-center mb-5" style={{ fontSize: "1.1rem", color: "#555" }}>
        Welcome to MyShop! We are committed to providing the best quality products with a modern touch. 
        Our team works hard to bring you the latest trends and designs to fit your taste.
      </p>

      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm border-0 rounded-4 hover-card">
            <Card.Body className="text-center">
              <Card.Title style={{ color: "#198754", fontWeight: "bold" }}>Our Mission</Card.Title>
              <Card.Text style={{ color: "#555" }}>
                To deliver high-quality products that bring joy and satisfaction to every customer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 rounded-4 hover-card">
            <Card.Body className="text-center">
              <Card.Title style={{ color: "#198754", fontWeight: "bold" }}>Our Vision</Card.Title>
              <Card.Text style={{ color: "#555" }}>
                To be a leading brand known for creativity, innovation, and customer happiness.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 rounded-4 hover-card">
            <Card.Body className="text-center">
              <Card.Title style={{ color: "#198754", fontWeight: "bold" }}>Our Team</Card.Title>
              <Card.Text style={{ color: "#555" }}>
                A dedicated team of designers and developers passionate about bringing style and quality together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;