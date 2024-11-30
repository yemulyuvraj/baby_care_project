import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="block about-block" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <Container fluid>
        <div className="title-holder mb-5">
          <center><h1><strong>What Are We About</strong></h1></center>
        </div>
        <Row>
          <Col sm={6}>
            <Image
              src="/images/im12.jpg" // Directly referencing the public folder
              style={{
                width: '80%', // Responsive width
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
              alt="About Us"
            />
          </Col>
          <Col sm={6}>
            <Card className="mt-5" style={{ padding: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Text>
                  "Welcome to Babycare, your trusted resource for expert guidance on caring for your baby and supporting pregnant mothers with personalized diet plans. Our website is absolutely free, and we invite you to start exploring now. Discover expert-approved tips, advice, and resources to ensure the best possible care for your little one. Stay informed, stay empowered, and give your baby the best possible start in life. From pregnancy to parenthood, we've got you covered. Explore our comprehensive guides and start your journey to confident parenting today!"
                </Card.Text>
                <div className="text-center">
                  <a href="/" className="btn btn-primary mt-4" style={{ padding: '10px 20px', fontSize: '16px' }}>Read Home</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
