import React, { useState } from "react";
import { Form, Button, Col, Row, Card, Container, Alert } from "react-bootstrap";

const SellBanana = ({ bananaPrice }) => {
  const [landSize, setLandSize] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!landSize || !productDescription || !address || !image) {
      setErrorMessage("All fields must be filled in correctly.");
    } else {
      setErrorMessage("");
      setSuccessMessage("Your banana listing has been successfully submitted!");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h3 className="mb-4">Sell Your Bananas</h3>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              {successMessage && <Alert variant="success">{successMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Current Banana Price</Form.Label>
                  <Form.Control type="text" value={bananaPrice} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Land Size (in acres)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter land size"
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Describe your bananas"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Farmer's Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {image && (
                    <div className="mt-3">
                      <img
                        src={image}
                        alt="Product Preview"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </div>
                  )}
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Submit Listing
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SellBanana;
