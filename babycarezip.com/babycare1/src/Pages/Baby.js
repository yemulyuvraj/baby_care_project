import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './baby.css';

export default function Baby() {
  return (
    <div className="text">
      <Container fluid>
        <div className="title-holder mb-5">
          <center>
            <h1><b>Welcome to Baby Essential</b></h1>
          </center>
        </div>

        <Row>
          <Col sm={6}>
            <center>
              <Image
                src={'/Images/aby.jpg.webp'}
                style={{
                  width: '600px',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </center>
          </Col>
          <Col sm={6}>
            <h5 className="st-5">
              <center>
                <h3>
                  Parenthood is a beautiful journey, and we are here to support you every step of the way. From newborn care to toddler milestones, our expert tips and advice will help you navigate the world of baby care with confidence and ease. Whether you're looking for guidance on feeding, sleep schedules, or developmental milestones, we provide everything you need to ensure your baby grows healthy and happy.
                  <br />
                  Our dedicated team of pediatricians, nutritionists, and experienced parents share trusted advice and resources to answer your every question. Let us be a part of your baby’s journey by offering insights tailored to your family’s needs.
                  <br />
                  Discover our comprehensive baby care guides below and give your baby the best start in life.
                </h3>
              </center>
            </h5>
          </Col>
        </Row>
      </Container>

      <section className="baby-links">
        <h2>Explore Resources</h2>
        <div className="link-button">
          <Link to="/immunization" className="link-btn">Immunization</Link><br />
          <Link to="/hygine" className="link-btn">Hygiene and Sleep Routine</Link><br />
          <Link to="/name" className="link-btn">BabyCare Products</Link>
        </div>
      </section>
    </div>
  );
}
