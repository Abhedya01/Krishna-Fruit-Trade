import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./BuyerDashBoard.css"; // Assuming the CSS is in this file

const FooterContent = () => {
  const [enquiry, setEnquiry] = useState('');
  const [status, setStatus] = useState('');

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (enquiry.trim()) {
      setStatus('Your enquiry has been submitted. We will get back to you soon.');
      setEnquiry('');
    } else {
      setStatus('Please enter a valid enquiry.');
    }
  };

  return (

    
    <Container>
      {/* FooterForm */}
      <Row>
        <Col md={4}>
          <p>&copy; 2024 Fresh Horizons | Empowering Buyers Worldwide</p>
        </Col>
        <Col md={4}>
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="footer-enquiry">
            <h5>Have a Question?</h5>
            <Form onSubmit={handleEnquirySubmit}>
              <Form.Group controlId="enquiryText">
                <Form.Control
                  type="text"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  placeholder="Ask us something..."
                />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
            {status && <p className="mt-2">{status}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterContent;
