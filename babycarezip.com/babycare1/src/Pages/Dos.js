import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const dosDontsData = {
  dos: [
    "Acknowledge your feelings and emotions.",
    "Stay connected with friends and family.",
    "Practice self-care and relaxation techniques.",
    "Seek professional support when needed.",
    "Engage in activities that bring you joy."
  ],
  donts: [
    "Ignore your emotional needs.",
    "Isolate yourself from others.",
    "Be too hard on yourself for feeling overwhelmed.",
    "Neglect seeking help from professionals.",
    "Overcommit and take on too much responsibility."
  ]
};

const DosDonts = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-primary">Dos and Don'ts of Mother Wellbeing</h2>
      <Row>
        {/* Dos Section */}
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">Dos</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {dosDontsData.dos.map((item, index) => (
                  <li key={index} className="mb-2">
                    <span className="badge bg-success me-2">✔️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Don'ts Section */}
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-danger text-white fw-bold">Don'ts</Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {dosDontsData.donts.map((item, index) => (
                  <li key={index} className="mb-2">
                    <span className="badge bg-danger me-2">❌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Back Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/wellbeing">
                    <button style={{ height: '50px', width: '120px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>Back</button>
                </Link>
            </div>
    </Container>
  );
};

export default DosDonts;
