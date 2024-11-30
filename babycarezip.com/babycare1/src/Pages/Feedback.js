import React, { useState } from 'react';
import './Feedback.css';
import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateEmail = (email) =>
    /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateFeedback = (feedback) => feedback.length >= 10;

  const handleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setFeedback((prevFeedback) => prevFeedback + ' ' + transcript);
    };

    recognition.start();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(name) || !validateEmail(email) || !validateFeedback(feedback)) {
      setErrorMessage('Please enter valid information.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/feedback/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, feedback }),
      });

      if (response.ok) {
        setMessageSent(true);
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Server error: Could not submit feedback.');
    }
  };

  return (
    <div className="feedback-page">
      <section className="feedback-intro text-center mb-4">
        <h1>We Value Your Feedback</h1>
        <p className="lead">
          Your feedback is important to us! Whether you have suggestions on how we can improve,
          want to share your experience using our resources, or have any questions, we are here to listen.
        </p>
      </section>

      {!messageSent ? (
        <Container>
          <Form className="feedback-form" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="feedback">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control
                as="textarea"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={6}
                required
                placeholder="Share your feedback here..."
              />
              <Button variant="secondary" className="mt-2" onClick={handleSpeechRecognition}>
                {isListening ? 'Listening...' : 'Start Speaking'}
              </Button>
            </Form.Group>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Button variant="primary" type="submit" className="mt-3">
              Submit Feedback
            </Button>
          </Form>
        </Container>
      ) : (
        <Container className="text-center">
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully. We appreciate your input.</p>
        </Container>
      )}

      <center>
        <h1>
          <strong>Doctor Support</strong>
        </h1>
      </center>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <div className="consult-support">
              <center>
                <h3>Doctor Name and Profession</h3>
                <h2>Dr. Pravin Dongre</h2>
                <h4>Pediatrician</h4>
                <h2>Dr. Puja Bhosle</h2>
                <h4>Dietitian</h4>
              </center>
            </div>
          </Col>
          <Col sm={6}>
            <div className="doctor-support">
              <center>
                <h3>Pediatrician On Call Support & Clinic</h3>
                <h4>Monday to Saturday</h4>
                <h4>Time: 10 am - 7 pm</h4>
                <h3>Dietitian On Call Support</h3>
                <h4>Monday to Saturday</h4>
                <h4>Time: 12 pm - 5 pm</h4>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Feedback;
