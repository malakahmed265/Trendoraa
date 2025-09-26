import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Red Rose 🌹", price: 50, quantity: 1 },
    { id: 2, name: "Tulip 🌷", price: 70, quantity: 2 },
    { id: 3, name: "Sunflower 🌻", price: 30, quantity: 3 },
  ]);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-page mt-5">
      <h2 className="text-center mb-4 fw-bold text-success">🛒 Your Shopping Cart</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="mb-3 shadow-sm rounded">
                  <Card className="p-3 d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <h5>{item.name}</h5>
                      <p className="mb-1">💲 {item.price} EGP</p>
                      <p className="mb-0">Quantity: {item.quantity}</p>
                    </div>
                    <div>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => handleIncrease(item.id)}
                      >
                        ➕
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleDecrease(item.id)}
                      >
                        ➖
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        🗑 Remove
                      </Button>
                    </div>
                  </Card>
                </ListGroup.Item>
              ))
            ) : (
              <h4 className="text-center text-muted">😢 Your cart is empty</h4>
            )}
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-lg rounded">
            <h4 className="fw-bold text-center">💰 Cart Summary</h4>
            <p className="mt-3">Total Items: {cartItems.length}</p>
            <p className="fw-bold">Total Price: {totalPrice} EGP</p>
            <Button variant="success" className="w-100 mt-2">
              ✅ Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;