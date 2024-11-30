import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './immunization.css';
import { Link } from 'react-router-dom';

const Immunization = () => {
  const Immunizations = [
    { age: 'At Birth', vaccine: 'BCG', description: 'Prevents Tuberculosis (TB)' },
    { age: 'At Birth', vaccine: 'OPV 0', description: 'Prevents Polio' },
    { age: 'At Birth', vaccine: 'Hepatitis B (Birth Dose)', description: 'Prevents Hepatitis B (Liver infection)' },
    { age: '6 Weeks', vaccine: 'DTwP/DTaP (1st dose)', description: 'Prevents Diphtheria, Tetanus, and Pertussis (Whooping Cough)' },
    { age: '6 Weeks', vaccine: 'IPV (1st dose)', description: 'Prevents Polio' },
    { age: '6 Weeks', vaccine: 'Hib (1st dose)', description: 'Prevents Meningitis, Pneumonia' },
    { age: '6 Weeks', vaccine: 'Rotavirus (1st dose)', description: 'Prevents Severe diarrhea' },
    { age: '6 Weeks', vaccine: 'PCV (1st dose)', description: 'Prevents Pneumococcal infections (Pneumonia, Meningitis)' },
    { age: '10 Weeks', vaccine: 'DTwP/DTaP (2nd dose)', description: 'Prevents Diphtheria, Tetanus, and Pertussis (Whooping Cough)' },
    { age: '10 Weeks', vaccine: 'IPV (2nd dose)', description: 'Prevents Polio' },
    { age: '10 Weeks', vaccine: 'Hib (2nd dose)', description: 'Prevents Meningitis, Pneumonia' },
    { age: '10 Weeks', vaccine: 'Rotavirus (2nd dose)', description: 'Prevents Severe diarrhea' },
    { age: '10 Weeks', vaccine: 'PCV (2nd dose)', description: 'Prevents Pneumococcal infections (Pneumonia, Meningitis)' },
    { age: '14 Weeks', vaccine: 'DTwP/DTaP (3rd dose)', description: 'Prevents Diphtheria, Tetanus, and Pertussis (Whooping Cough)' },
    { age: '14 Weeks', vaccine: 'IPV (3rd dose)', description: 'Prevents Polio' },
    { age: '14 Weeks', vaccine: 'Hib (3rd dose)', description: 'Prevents Meningitis, Pneumonia' },
    { age: '14 Weeks', vaccine: 'Rotavirus (3rd dose)', description: 'Prevents Severe diarrhea' },
    { age: '14 Weeks', vaccine: 'PCV (3rd dose)', description: 'Prevents Pneumococcal infections (Pneumonia, Meningitis)' },
    { age: '6 Months', vaccine: 'Hepatitis B (2nd dose)', description: 'Prevents Hepatitis B (Liver infection from contaminated food/water)' },
    { age: '6 Months', vaccine: 'OPV (1st dose)', description: 'Prevents Polio' },
    { age: '6 Months', vaccine: 'Influenza Vaccine', description: 'Annual Flu protection' },
    { age: '9 Months', vaccine: 'MR Vaccine (1st dose)', description: 'Prevents Measles and Rubella (German Measles)' },
    { age: '9 Months', vaccine: 'OPV (2nd dose)', description: 'Prevents Polio' },
    { age: '9 Months', vaccine: 'Typhoid Conjugate Vaccine', description: 'Prevents Typhoid Fever' },
    { age: '12 Months', vaccine: 'Hepatitis A (1st dose)', description: 'Prevents Hepatitis A (Liver infection from contaminated food/water)' },
    { age: '15 Months', vaccine: 'MMR (1st dose)', description: 'Prevents Measles, Mumps, Rubella' },
    { age: '15 Months', vaccine: 'Varicella (1st dose)', description: 'Prevents Chickenpox' },
    { age: '15 Months', vaccine: 'PCV (Booster dose)', description: 'Prevents Pneumococcal infections (Pneumonia, Meningitis)' },
    { age: '18 Months', vaccine: 'DTwP/DTaP (Booster 1)', description: 'Prevents Diphtheria, Tetanus, Pertussis' },
    { age: '18 Months', vaccine: 'IPV (Booster 1)', description: 'Prevents Polio' },
    { age: '18 Months', vaccine: 'Hib (Booster 1)', description: 'Prevents Meningitis, Pneumonia' },
    { age: '18 Months', vaccine: 'OPV (Booster 1)', description: 'Prevents Polio' },
    { age: '18 Months', vaccine: 'Hepatitis A (2nd dose)', description: 'Prevents Hepatitis A' },
    { age: '18 Months', vaccine: 'MMR (2nd dose)', description: 'Prevents Measles, Mumps, Rubella' },
    { age: '2 Years', vaccine: 'Typhoid Conjugate Vaccine (Booster dose)', description: 'Prevents Typhoid Fever' },
    { age: '2 Years', vaccine: 'Influenza Vaccine', description: 'Annual Flu protection' },
  ];

  const [activeAgeGroup, setActiveAgeGroup] = useState(null);

  const toggleSection = (ageGroup) => {
    setActiveAgeGroup(activeAgeGroup === ageGroup ? null : ageGroup);
  };

  const groupedImmunizations = {
    "At Birth": Immunizations.filter(vaccine => vaccine.age === 'At Birth'),
    "6 Weeks": Immunizations.filter(vaccine => vaccine.age === '6 Weeks'),
    "10 Weeks": Immunizations.filter(vaccine => vaccine.age === '10 Weeks'),
    "14 Weeks": Immunizations.filter(vaccine => vaccine.age === '14 Weeks'),
    "6 Months": Immunizations.filter(vaccine => vaccine.age === '6 Months'),
    "9 Months": Immunizations.filter(vaccine => vaccine.age === '9 Months'),
    "12 Months": Immunizations.filter(vaccine => vaccine.age === '12 Months'),
    "15 Months": Immunizations.filter(vaccine => vaccine.age === '15 Months'),
    "18 Months": Immunizations.filter(vaccine => vaccine.age === '18 Months'),
    "2 Years": Immunizations.filter(vaccine => vaccine.age === '2 Years'),
  };

  return (
    <div className="Immunization-image">
      <section id="about" className="block about-block" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
        <Container fluid>
          <div className="title-holder mb-5">
            <center>
              <h1><strong>A Shield for Your Baby's Health</strong></h1>
            </center>
          </div>
          <Row>
            <Col sm={6}>
              <center>
                <Image
                  src={'/Images/Immunization.webp'}
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
              <h5 className="mt-5">
                <p>
                  <center>
                    "Immunization is one of the most effective ways to ensure your child grows up healthy and protected from preventable diseases. Vaccines work by strengthening the immune system to fight off dangerous infections that can have lasting effects on your child’s well-being.
                    In the first few years of life, your baby is vulnerable to various illnesses, which is why following an immunization schedule is crucial. Timely vaccination not only safeguards your child but also helps prevent the spread of diseases in the community."
                  </center>
                </p>
              </h5>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="immunization-chart">
        <h1>Immunization Chart for Babies (0-2 Years) - India 2024</h1>
        {Object.keys(groupedImmunizations).map(ageGroup => (
          <div key={ageGroup}>
            <button onClick={() => toggleSection(ageGroup)} style={{ width: '100%', padding: '10px', backgroundColor: '#f0f0f0', border: 'none', textAlign: 'left' }}>
              <strong>{ageGroup}</strong>
            </button>
            {activeAgeGroup === ageGroup && (
              <ul>
                {groupedImmunizations[ageGroup].map((vaccine, index) => (
                  <li key={index}>
                    <strong>{vaccine.vaccine}</strong>: {vaccine.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/mother">
          <Button style={{ backgroundColor: '#6c757d', border: 'none', borderRadius: '20px', padding: '0.5rem 1.5rem' }}>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Immunization;
