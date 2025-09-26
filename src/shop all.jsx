import React from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";

const products = [
  { id: 1, title: "Elegant Dress", price: "$120", img: "/img/14.jpeg " },
  { id: 2, title: "Modern Jacket", price: "$150", img: "/img/15.jpeg " },
  { id: 3, title: "Casual Shoes", price: "$90", img: "/img/16.jpeg " },
  { id: 4, title: "Stylish Watch", price: "$200", img: "/img/17.jpeg " },
  { id: 5, title: "Smart Shirt", price: "$75", img: " /img/18.jpeg " },
  { id: 6, title: "Luxury Bag", price: "$250", img: " /img/19.jpeg" },
  { id: 7, title: "Cool Hat", price: "$45", img: " /img/20.jpeg " },
  { id: 8, title: "Trendy Sunglasses", price: "$80", img: " /img/21.jpeg " },
  { id: 9, title: "Sport Sneakers", price: "$110", img: " /img/22.jpeg " },
  { id: 10, title: "Classic Pants", price: "$95", img: " /img/23.jpeg" },
  { id: 11, title: "Chic Scarf", price: "$40", img: " /img/24.jpeg " },
  { id: 12, title: "Formal Suit", price: "$300", img: " /img/25.jpeg " },
];

const ShopAll = () => {
  return (
    <>
      {/* ✅ Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop All</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Page Content */}
      <Container className="shop-all-page">
        <h1 className="text-center fw-bold mb-5 shop-title">✨ Shop All ✨</h1>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="custom-card h-100 shadow-sm">
                <Card.Img variant="top" src={product.img} className="card-img" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-muted">{product.price}</Card.Text>
                  <Button variant="success" className="w-100">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShopAll;