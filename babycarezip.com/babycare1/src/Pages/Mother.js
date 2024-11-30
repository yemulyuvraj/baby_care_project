import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Image } from 'react-bootstrap'; // Properly import Image from react-bootstrap
import './mother.css';

const Mother = () => {
  return (
    <div className="mother-page">
      <Container fluid>
        <div className='title-holder mb-5'>
          <h1><b>Caring for Expecting Mother</b></h1>
        </div>
        <Row>
          <Col sm={6} className="text-center">
            <Image
              src={'/Images/star.jpg.webp'}
              style={{
                width: '600px',
                height: '550px',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </Col>
          <Col sm={6}>
            <h5 className='st-5'>
              <h3>
                Pregnancy is an incredible journey filled with both excitement and challenges. 
                At BABY Care, we’re dedicated to supporting expecting mothers with trusted resources 
                to ensure a healthy pregnancy. Whether it's staying active, maintaining a balanced diet, 
                or understanding the changes in your body, we are here to guide you every step of the way.
                <br />
                Explore our carefully curated articles, tips, and exercises designed to promote a healthy 
                and happy pregnancy, so you and your baby thrive.
              </h3>
            </h5>
          </Col>
        </Row>
      </Container>

      <section className="mother-links">
        <h2>Explore Resources for a Healthy Pregnancy</h2>
        <div className="link-buttons">
          <Link to="/exercise" className="link-btn">Safe Exercises</Link><br />
          <Link to="/wellbeing" className="link-btn">Emotional & Physical Well-being</Link><br />
          <Link to="/Lbw" className='link-btn'>LBW Prediction</Link>
        </div>
      </section>
    </div>
  );
};

export default Mother;
