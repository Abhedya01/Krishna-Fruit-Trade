import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import './BuyerDashBoard.css';

const BuyerProfile = () => {
  const farmer = {
    name: "John Doe",
    idNo: "F12345",
    photo: "https://via.placeholder.com/150",
    mobile: "+1-234-567-8901",
    address: "123 Green Valley, Countryside, State, ZIP",
    farmingArea: "25 acres",
    primaryCrops: "Wheat, Rice, Corn",
    experience: "10 years",
  };

  return (
    <div className="farmer-profile">
      <h2 className="mb-4">Farmer Profile</h2>
      <Card className="shadow-sm">
        <Row className="g-0">
          <Col md={4} className="text-center">
            <img
              src={farmer.photo}
              alt="Farmer"
              className="img-thumbnail profile-photo my-3"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <h3>{farmer.name}</h3>
              <p><strong>ID No:</strong> {farmer.idNo}</p>
              <p><strong>Mobile:</strong> {farmer.mobile}</p>
              <p><strong>Address:</strong> {farmer.address}</p>
              <p><strong>Farming Area:</strong> {farmer.farmingArea}</p>
              <p><strong>Primary Crops:</strong> {farmer.primaryCrops}</p>
              <p><strong>Experience:</strong> {farmer.experience}</p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BuyerProfile;
