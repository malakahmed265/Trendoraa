import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";


const cardsData = [
  { id: 1, title: "Elegant Vase", subtitle: "Handcrafted ceramic", price: "$45", img: "/img/13.jpeg ", tag: "New" },
  { id: 2, title: "Silk Scarf", subtitle: "Soft & stylish", price: "$28", img: " /img/12.jpeg", tag: "Hot" },
  { id: 3, title: "Rose Candle", subtitle: "Long-lasting aroma", price: "$12", img: " /img/11.jpeg", tag: "Sale" },
  { id: 4, title: "Gold Necklace", subtitle: "Minimal design", price: "$120", img: "/img/10.jpeg ", tag: "New" },
  { id: 5, title: "Leather Wallet", subtitle: "Premium leather", price: "$39", img: "/img/9.jpeg ", tag: "Best" },
  { id: 6, title: "Decor Pillow", subtitle: "Soft & comfy", price: "$22", img: "/img/8.jpeg ", tag: "Hot" },
  { id: 7, title: "Sunglasses", subtitle: "UV protection", price: "$34", img: "/img/7.jpeg ", tag: "New" },
  { id: 8, title: "Notebook", subtitle: "Hardcover journal", price: "$15", img: "/img/6.jpeg ", tag: "Sale" },
  { id: 9, title: "Ceramic Mug", subtitle: "Cute print", price: "$10", img: "/img/5.jpeg ", tag: "Best" },
  { id: 10, title: "Plant Pot", subtitle: "Minimal planter", price: "$18", img: "/img/4.jpeg ", tag: "New" },
  { id: 11, title: "Wall Art", subtitle: "Modern print", price: "$55", img: "/img/3.jpeg ", tag: "Featured" },
  { id: 12, title: "Phone Case", subtitle: "Slim & protective", price: "$14", img: "/img/2.jpeg ", tag: "Hot" },
];

const CardsGrid = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {cardsData.map((c) => (
          <Col key={c.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100 border-0">
              <div className="img-wrap">
                <Card.Img variant="top" src={c.img} alt={c.title} />
                <Badge pill bg="warning" className="card-badge">
                  {c.tag}
                </Badge>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-1">{c.title}</Card.Title>
                <Card.Text className="text-muted small mb-2">{c.subtitle}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div className="price fw-bold">{c.price}</div>
                  <Button size="sm" variant="outline-success" className="btn-sm">
                    Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsGrid;