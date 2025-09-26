import React from 'react';  
import { Container, Row, Col, Button } from 'react-bootstrap';  

const IMAGE_URL = "/img/1.jpeg";  

const HeroBanner = () => {  
  return (  
    <Container className="my-5">  
      <Row   
        className="g-4 p-4 align-items-center rounded-3 shadow-lg hero-banner-custom"   
        style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}   
      >  
        <Col md={6} className="text-center">  
          <div style={{ width: "100%", height: "350px", overflow: "hidden", borderRadius: "15px" }}>  
            <img   
              src={IMAGE_URL}   
              alt="New Collection Banner"   
              style={{  
                width: "100%",  
                height: "100%",  
                objectFit: "cover",  
                borderRadius: "15px"  
              }}   
            />  
          </div>  
        </Col>  

        <Col md={6}>  
          <h1 className="display-5 fw-bold mb-3 text-success">  
            🌸 Discover the Latest Trends at Trendora
          </h1>  
          <p className="lead text-muted">  
            .  Discover our latest exclusive designs just arrived. Unmatched quality and modern styles that suit your taste.
          </p>  
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">  
            <Button variant="success" size="lg" className="px-4">  
              Shop Now
            </Button>  
            <Button variant="outline-secondary" size="lg" className="px-4">  
              View Details 
            </Button>  
          </div>  
        </Col>  
      </Row>  
    </Container>  
  );  
};  

export default HeroBanner;