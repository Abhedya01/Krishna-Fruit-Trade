import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./BuyerDashBoard.css"; // Use the same CSS file for consistency

const OrderPlacement = () => {
  const [orderDetails, setOrderDetails] = useState({
    category: "",
    quantity: "",
    paymentOption: "",
    deliveryAddress: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", orderDetails);
    // Add logic to handle order placement
  };

  return (
    <Container className="buyer-dashboard-order-placement-container mt-4">
      <Card className="buyer-dashboard-order-placement-card shadow-lg">
        <Card.Header className="buyer-dashboard-order-placement-card-header text-center">
          <h3>Place Your Order</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="category" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={orderDetails.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Dairy">Dairy</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label>Quantity (kg)</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                value={orderDetails.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="paymentOption" className="mb-3">
              <Form.Label>Payment Option</Form.Label>
              <Form.Select
                name="paymentOption"
                value={orderDetails.paymentOption}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Option</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Online Payment">Online Payment</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="deliveryAddress" className="mb-3">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                as="textarea"
                name="deliveryAddress"
                rows={3}
                placeholder="Enter delivery address"
                value={orderDetails.deliveryAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="additionalNotes" className="mb-3">
              <Form.Label>Additional Notes (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="additionalNotes"
                rows={2}
                placeholder="Enter any additional instructions"
                value={orderDetails.additionalNotes}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="buyer-dashboard-order-placement-button"
              >
                Place Order
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderPlacement;
