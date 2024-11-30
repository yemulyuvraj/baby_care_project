import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './mother.css';

export default function Exercise() {
  const images = [
    {
      src: '/images/walk.jpg',
      title: 'Walking',
      caption: 'Simple and effective; improves cardiovascular health and maintains fitness.',
    },
    {
      src: '/images/preYogaEx.jpg',
      title: 'Prenatal Yoga',
      caption: 'Enhances flexibility, promotes relaxation, and reduces stress.',
    },
    {
      src: '/images/seatedLegLift.jpg',
      title: 'Seated Leg-lift',
      caption: 'Strengthens abdominal and leg muscles without straining the back.',
    },
    {
      src: '/images/gentleStretch.webp',
      title: 'Gentle Stretch',
      caption: 'Increases flexibility and helps relieve tension in the body.',
    },
    {
      src: '/images/abdEx.webp',
      title: 'Abdominal Exercises',
      caption: 'Strengthens the core while being safe and supportive during pregnancy.',
    },
    {
      src: '/images/pelvicFloorEx.jpg',
      title: 'Pelvic Floor Exercises',
      caption: 'Helps with labor and recovery by strengthening pelvic floor muscles.',
    },
  ];

  const images2 = [
    {
      src: '/images/bodyweightSquat.webp',
      title: 'Bodyweight Squats',
      caption: 'Strengthens legs and glutes, and helps with balance.',
    },
    {
      src: '/images/catCowStretch.avif',
      title: 'Cat-Cow Stretches',
      caption: 'Improves spinal flexibility and relieves back tension.',
    },
    {
      src: '/images/seatedForwardBend.jpg',
      title: 'Seated Forward Bends',
      caption: 'Stretches the lower back and hamstrings.',
    },
  ];

  const images3 = [
    {
      src: '/images/walking.jpg',
      title: 'Normal Walking',
      caption: 'Maintains cardiovascular fitness, boosts mood, and reduces swelling.',
    },
    {
      src: '/images/squats.jpg',
      title: 'Squats',
      caption: 'Prepares for labor when performed starting two weeks before the due date.',
    },
    {
      src: '/images/recBoundAngle.jpg',
      title: 'Reclined Bound-Angle Pose',
      caption: 'Opens the hips and promotes relaxation.',
    },
  ];

  return (
    <div className="text">
      {/* Title Section */}
      <Container fluid>
        <div className="title-holder mb-5">
          <center>
            <h1><b>Essential Exercises for New Mothers To Be...</b></h1>
          </center>
        </div>
        <Row>
          <Col sm={6}>
            <center>
              <Image
                src="/images/yoga1.avif"
                style={{ width: '450px', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
                alt="Yoga"
              />
            </center>
          </Col>
          <Col sm={6}>
            <h3>
              <center>
                <p>
                  Proper body exercises during pregnancy are as essential as a baby needs their first breastfeeding. 
                  Muscular exercises and Yogasana help pregnant women stay calm and care for themselves and their baby. 
                  Exercise alleviates anxiety and depression symptoms, promoting overall emotional health.
                </p>
                <p>
                  Incorporating safe exercise into your routine can greatly benefit both you and your baby.
                </p>
              </center>
            </h3>
          </Col>
        </Row>
      </Container>

      {/* 1st Trimester Exercises */}
      <Container fluid>
        <div className="title-holder mb-5">
          <center>
            <h2><b>-: 1st Trimester (1-3 Months) :-</b></h2>
          </center>
        </div>
        <Row className="text-center">
          {images.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.src} alt={image.title} className="img-fluid" />
              <h5>{image.title}</h5>
              <p>{image.caption}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 2nd Trimester Exercises */}
      <Container fluid>
        <div className="title-holder mb-5">
          <center>
            <h2><b>-: 2nd Trimester (3-6 Months) :-</b></h2>
          </center>
        </div>
        <Row className="text-center">
          {images2.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.src} alt={image.title} className="img-fluid" />
              <h5>{image.title}</h5>
              <p>{image.caption}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 3rd Trimester Exercises */}
      <Container fluid>
        <div className="title-holder mb-5">
          <center>
            <h2><b>-: 3rd Trimester (6-9 Months) :-</b></h2>
          </center>
        </div>
        <Row className="text-center">
          {images3.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.src} alt={image.title} className="img-fluid" />
              <h5>{image.title}</h5>
              <p>{image.caption}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Back Button */}
     < div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link to="/wellbeing">
                    <button style={{ height: '50px', width: '120px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>Back</button>
                </Link>
            </div>
    </div>
  );
}
