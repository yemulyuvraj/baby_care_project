import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const servicesData = [
  {
    title: "Nutrition Plans",
    description: "Customized diet plans for both to ensure health and development.",
    image: '/images/nutrition.jpg.jpg',
    link: '/Diet'
  },
  {
    title: "Hygiene & Safety",
    description: "Essential tips on maintaining hygiene and safety for your baby.",
    image: '/images/hygine.jpg.jpg',
    link: '/hygine'
  },
  {
    title: "Immunization Guidance",
    description: "Information on necessary vaccinations and health check-ups for your baby.",
    image: '/images/Vaccination.jpg.jpg',
    link: '/Immunization'
  },
  {
    title: "Mother Care",
    description: "Caring for pregnant women is crucial for a healthy pregnancy and safe delivery.",
    image: '/images/other.jpg.webp',
    link: '/Mother'
  }
];


const OurServices = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch" key={index}>
            <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Card.Img
                variant="top"
                src={service.image}
                alt={service.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="mt-auto">
                  <a href={service.link} className="btn btn-primary">Explore</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;
