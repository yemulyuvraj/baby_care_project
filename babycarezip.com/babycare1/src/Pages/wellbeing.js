import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "Emotional Wellbeing",
    description: "Emotional wellbeing is crucial during motherhood, as it impacts both the mother and baby's health. Engage in supportive relationships and prioritize self-care to nurture your emotional health.",
    link: '/Emotional'
  },
  {
    title: "Mental Wellbeing",
    description: "Maintaining mental wellbeing is essential for navigating the challenges of motherhood. Utilize mindfulness practices and seek professional support when needed to enhance your mental resilience.",
    link: '/Mental'
  },
  {
    title: "Physical Wellbeing",
    description: "Physical wellbeing ensures that both mother and baby receive the care they need for optimal growth and development. Regular check-ups, a balanced diet, and exercise play vital roles in maintaining health.",
    link: '/Physical'
  },
  {
    title: "Dos and Don'ts",
    description: "Understanding the dos and don'ts of motherhood can foster a healthy pregnancy and delivery. Make informed choices to support both your wellbeing and your baby's development.",
    link: '/Dos'
  }
];

const Wellbeing = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Mother Wellbeing</h2>
      <div className="mb-4 text-center">
        <p className="lead" style={{ fontSize: '1.2em', color: '#555' }}>
          <b>Motherhood is a beautiful journey, filled with joy and challenges. It's essential to prioritize your wellbeing to create a nurturing environment for your baby. Explore our resources to empower yourself and embrace this transformative phase with confidence.</b>
        </p>
      </div>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm" style={{ border: 'none', borderRadius: '10px' }}>
              <Card.Body style={{ padding: '1.5rem' }}>
                <Card.Title style={{ fontWeight: 'bold', color: '#333' }}>{service.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>{service.description}</Card.Text>
                <a href={service.link} className="btn btn-outline-primary" style={{ borderRadius: '20px' }}>Explore</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/mother">
          <Button style={{ backgroundColor: '#6c757d', border: 'none', borderRadius: '20px', padding: '0.5rem 1.5rem' }}>Back</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Wellbeing;
