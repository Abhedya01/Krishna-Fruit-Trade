import React, { useState } from "react";
import { Card, Table, Button, Dropdown, DropdownButton, Alert } from "react-bootstrap";

const BillingPayments = () => {
  const [category, setCategory] = useState("Banana Sellers");
  const [storagePayment, setStoragePayment] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Billing data for both categories: Banana Sellers and Refrigeration Users
  const billingData = {
    "Banana Sellers": [
      { date: "2024-12-15", description: "Sales Fee (200kg)", amount: "$100", status: "Paid" },
      { date: "2024-12-12", description: "Commission on Sales (150kg)", amount: "$60", status: "Paid" },
      { date: "2024-11-30", description: "Sales Fee (50 Transactions)", amount: "$25", status: "Paid" },
    ],
    "Refrigeration Users": [
      { date: "2024-12-15", description: "Storage Fee (100kg for 10 days)", amount: "$40", status: "Paid" },
      { date: "2024-12-01", description: "Storage Fee (50kg for 15 days)", amount: "$25", status: "Paid" },
      { date: "2024-11-20", description: "Electricity Surcharge", amount: "$10", status: "Paid" },
    ],
  };

  // Upcoming payments for both categories
  const upcomingPayments = {
    "Banana Sellers": { dueDate: "2025-01-15", description: "Platform Subscription", amount: "$50" },
    "Refrigeration Users": { dueDate: "2025-01-10", description: "Storage Fee (120kg for 7 days)", amount: "$35" },
  };

  // Function to calculate the cold storage fee based on land size and days
  const calculateStoragePayment = (landSize, days) => {
    const storageRatePerDay = 5; // Example rate: $5 per day per acre
    return landSize * days * storageRatePerDay;
  };

  // Handle cold storage payment
  const handleMakePayment = () => {
    if (category === "Refrigeration Users" && storagePayment !== null) {
      setPaymentSuccess(true);
      alert("Payment for cold storage has been processed.");
    } else if (category === "Banana Sellers") {
      alert("No payment required for Banana Sellers at this time.");
    }
  };

  // Form for calculating payment when storing bananas
  const handleColdStorageRequest = (landSize, days) => {
    if (landSize > 0 && days > 0) {
      const calculatedPayment = calculateStoragePayment(landSize, days);
      setStoragePayment(calculatedPayment);
    } else {
      alert("Please provide valid land size and days.");
    }
  };

  return (
    <div className="billing-payments">
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          {/* Category Selector */}
          <DropdownButton
            id="dropdown-category"
            title={`Category: ${category}`}
            onSelect={(selected) => setCategory(selected)}
            className="mb-3"
          >
            <Dropdown.Item eventKey="Banana Sellers">Banana Sellers</Dropdown.Item>
            <Dropdown.Item eventKey="Refrigeration Users">Refrigeration Users</Dropdown.Item>
          </DropdownButton>

          {/* Billing History */}
          <h2>Billing History</h2>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {billingData[category].map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.description}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Upcoming Payments */}
          <h3>Upcoming Payments</h3>
          <p>
            Your next payment is for <strong>{upcomingPayments[category].description}</strong> due on{" "}
            <strong>{upcomingPayments[category].dueDate}</strong> for an amount of{" "}
            <strong>{upcomingPayments[category].amount}</strong>.
          </p>

          {/* For Refrigeration Users, calculate and show cold storage payment */}
          {category === "Refrigeration Users" && !paymentSuccess && (
            <div>
              <h4>Cold Storage Request</h4>
              <p>Calculate the payment for storing bananas in the cold storage.</p>
              <input
                type="number"
                placeholder="Enter land size (acres)"
                min="1"
                onChange={(e) => handleColdStorageRequest(e.target.value, 10)} // Default to 10 days for simplicity
              />
              <input
                type="number"
                placeholder="Enter number of days"
                min="1"
                onChange={(e) => handleColdStorageRequest(5, e.target.value)} // Default to 5 acres for simplicity
              />
              {storagePayment && (
                <div className="mt-3">
                  <p><strong>Total Storage Fee: ${storagePayment}</strong></p>
                </div>
              )}
            </div>
          )}

          {/* Show the payment button only for Refrigeration Users */}
          {category === "Refrigeration Users" && !paymentSuccess && (
            <Button variant="primary" onClick={handleMakePayment}>
              Make Payment
            </Button>
          )}

          {/* Success message after payment */}
          {paymentSuccess && (
            <Alert variant="success" className="mt-4">
              Your payment for cold storage has been processed successfully!
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BillingPayments;
