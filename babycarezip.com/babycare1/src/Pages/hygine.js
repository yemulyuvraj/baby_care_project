
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button  from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';


import 'chart.js/auto';
import { Link } from 'react-router-dom';

export default function Hygiene() {
  const sleepTime = [
    { Age: '0-3 month', Totalsleep: '14-17 Hour', Nightsleep: '8-9 hour', Naps: '4-5 Naps' },
    { Age: '3-6 month', Totalsleep: '14-16 Hour', Nightsleep: '9-10 hour', Naps: '3 Naps' },
    { Age: '6-9 month', Totalsleep: '14-15 Hour', Nightsleep: '10-11 hour', Naps: '2-3 Naps' },
    { Age: '9-12 month', Totalsleep: '13-14 Hour', Nightsleep: '10-12 hour', Naps: '2 Naps' },
    { Age: '12-18 month', Totalsleep: '12-14 Hour', Nightsleep: '11-12 hour', Naps: '1-2 Naps' },
    { Age: '18-24 month', Totalsleep: '12-13 Hour', Nightsleep: '11-12 hour', Naps: '1 Naps' },
  ];

  return (
    <div>
      <center><h1>Hygiene and Sleep Routine</h1></center>
      
      <Container fluid>
        <Row>
          <Col sm={6}>
            <center>
              <Image
                src={'/Images/sleep2.webp'}
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
            <h5 className='st-5'>
              <p>
                <center>
                  <h2>Establishing a Sleep Routine</h2>
                  <p>A consistent sleep routine helps your baby get the rest they need.</p>
                  <ul>
                    <li><strong>Create a Calm Environment:</strong> Keep the sleeping area quiet, dark, and comfortable.</li>
                    <li><strong>Consistent Schedule:</strong> Put your baby to bed and wake them at the same time every day.</li>
                    <li><strong>Pre-Sleep Activities:</strong> Establish calming activities like baths or lullabies before bedtime.</li>
                    <li><strong>Safe Sleep Practices:</strong> Always place your baby on their back to sleep in a safe crib without loose bedding.</li>
                    <li><strong>Observe Sleep Cues:</strong> Pay attention to signs of sleepiness and respond quickly.</li>
                  </ul>
                </center>
              </p>
            </h5>
          </Col>
        </Row>
      </Container>

      <div className='char'>
        <div className="immunization-chart">
          <h1>Sleep Time Chart for Babies (0-2 Years) - India 2024</h1>
          <table>
            <thead>
              <tr>
                <th>Age</th>
                <th>Total Sleep</th>
                <th>Night Sleep</th>
                <th>Naps</th>
              </tr>
            </thead>
            <tbody>
              {sleepTime.map((sleepTime, index) => (
                <tr key={index}>
                  <td>{sleepTime.Age}</td>
                  <td>{sleepTime.Totalsleep}</td>
                  <td>{sleepTime.Nightsleep}</td>
                  <td>{sleepTime.Naps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='mt-5'>
        <Container fluid>
          <Row>
            <Col sm={6}>
              <h4 className='mt-5'>
                <center>
                  <h2>Baby Hygiene Essentials</h2>
                  <h4>To give proper info of health</h4>
                  <ul>
                    <li><strong>Bathing:</strong> Use mild, hypoallergenic soap for regular baths to keep your baby’s skin clean and healthy.</li>
                   
                    <li><strong>Diaper Changes:</strong> Change diapers frequently, clean thoroughly, and allow the skin to air dry to prevent rashes.</li>
                    <li><strong>Oral Care:</strong> Clean your baby’s gums with a soft, damp cloth after feedings. When teeth appear, use a soft brush and a small amount of fluoride toothpaste.</li>
                    <li><strong>Nail Care:</strong> Trim your baby’s nails regularly to prevent scratches.</li>
                    <li><strong>Hand Hygiene:</strong> Ensure everyone washes hands before handling the baby to reduce the risk of infections.</li>
                  </ul>
                </center>
              </h4>
            </Col>
           
            <Col sm={6}>
              <h5 className='st-5'>
                <Image 
                  src={'/Images/hygine2.webp'}
                  style={{ width: '600px', height: '450px', objectFit: 'cover', borderRadius: '10px' }}
                />
              </h5>
            </Col>
          </Row>
          <div>
            <center>
              <h1>Video Info for New Couple</h1>
          <iframe
           width="550"
           height="300"
          src="https://www.youtube.com/embed/7yxd25nZMaE"
           title="Baby Hygiene Video"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           style={{ marginTop: '10px', borderRadius: '10px', border: 'none' }}
           ></iframe>
          </center>
          </div>
        </Container>

        <div className="text-center mt-4">
        <Link to="/mother">
          <Button style={{ backgroundColor: '#6c757d', border: 'none', borderRadius: '20px', padding: '0.5rem 1.5rem' }}>Back</Button>
        </Link>
      </div>
      </div>
    </div>
  );
}
