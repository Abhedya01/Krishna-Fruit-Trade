import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const Notification = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: "New appointment request", details: "You have an appointment request for tomorrow." },
    { id: 2, message: "Payment due in 3 days", details: "Your payment for crop insurance is due in 3 days." },
    { id: 3, message: "New price update available", details: "The price for corn has increased by 5%." },
  ];

  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <div className="notification-page">
      <h3>Notifications</h3>

      {/* Display Notification List */}
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroup.Item
            key={notification.id}
            onClick={() => handleNotificationClick(notification)}
            style={{ cursor: "pointer" }}
          >
            {notification.message}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Display Notification Details */}
      {selectedNotification && (
        <Card className="mt-4">
          <Card.Header>Notification Details</Card.Header>
          <Card.Body>
            <Card.Title>{selectedNotification.message}</Card.Title>
            <Card.Text>{selectedNotification.details}</Card.Text>
            <Button variant="outline-danger" onClick={() => setSelectedNotification(null)}>
              Close
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Notification;
