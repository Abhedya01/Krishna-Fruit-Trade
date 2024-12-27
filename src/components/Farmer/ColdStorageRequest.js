import React, { useState } from "react";
import { Form, Button, Col, Row, Card, Container, Alert } from "react-bootstrap";

const ColdStorageRequest = ({ storageRent, remainingStorage }) => {
  const [address, setAddress] = useState("");
  const [landSize, setLandSize] = useState("");
  const [days, setDays] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(null);

  const [currentPrice, setCurrentPrice] = useState(1.2); // Example price per kg

  // Calculate the payment based on land size, storage days, and current banana price
  const calculatePayment = (size, days) => {
    if (!currentPrice) return 0;
    const storageRatePerDay = 5; // Example rate: $5 per day per acre
    return size * days * storageRatePerDay * currentPrice; // Multiply by price per kg
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!address || !landSize || !days) {
      setErrorMessage("All fields are required.");
      setSuccessMessage("");
      return;
    }

    const totalPayment = calculatePayment(landSize, days);

    setPaymentAmount(totalPayment);
    setErrorMessage("");
    setSuccessMessage("Your bananas have been successfully stored in the cold storage!");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h3 className="mb-4">Cold Storage Request</h3>

              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {successMessage && <Alert variant="success">{successMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="address" className="mb-3">
                  <Form.Label>Farmer's Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="landSize" className="mb-3">
                  <Form.Label>Land Size (in acres)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter land size"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="days" className="mb-3">
                  <Form.Label>Number of Days in Storage</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the number of days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Store Banana
                </Button>
              </Form>

              {/* Highlight updated storage rent and available space */}
              <div className="mt-4">
                <h5>Updated Storage Information</h5>
                <p><strong>Storage Rent: </strong>{storageRent}</p>
                <p><strong>Remaining Storage Space: </strong>{remainingStorage} kg</p>
              </div>

              {/* Show the payment amount if stored */}
              {paymentAmount !== null && (
                <div className="mt-4">
                  <h5>Payment Information</h5>
                  <p>Your bananas have been stored in the cold storage.</p>
                  <p>
                    Storage Cost: <strong>${paymentAmount.toFixed(2)}</strong>
                  </p>
                  <Button variant="success">Make Payment</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ColdStorageRequest;
