import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaBell,
  FaSignOutAlt,
  FaMoneyBill,
  FaPlusCircle,
  FaWarehouse,  // Icon for cold storage request
} from "react-icons/fa";
import "./FarmerDashBoard.css";
import Appointment from "./Appointment";
import FarmerProfile from "./FarmerProfile";
import CurrentPriceFeed from "./CurrentPriceFeed";
import Notification from "./Notification";
import BillingPayments from "./BillingPayments"; // Import BillingPayments component
import SellBanana from "./SellBanana"; // Import the SellBanana component
import ColdStorageRequest from "./ColdStorageRequest"; // Import the ColdStorageRequest component

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [storageRent, setStorageRent] = useState("Rs. 50/day"); // Storage rent state
  const [remainingStorage, setRemainingStorage] = useState(1000); // Remaining storage state

  // Function to update storage rent and remaining storage
  const handleStorageUpdate = (newStorageRent, newRemainingStorage) => {
    setStorageRent(newStorageRent);
    setRemainingStorage(newRemainingStorage);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5>Total Crops</h5>
                  <h3>15</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <h5>Total Earnings</h5>
                  <h3>$12,345</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      case "profile":
        return <FarmerProfile />;
      case "appointment":
        return <Appointment />;
      case "currentpricefeed":
        return <CurrentPriceFeed onStorageUpdate={handleStorageUpdate} />;  // Pass the update handler
      case "notification":
        return <Notification />;
      case "billing":
        return <BillingPayments />; // Render BillingPayments component
      case "sellBanana":
        return <SellBanana />; // Render SellBanana component
      case "coldStorageRequest":
        return <ColdStorageRequest storageRent={storageRent} remainingStorage={remainingStorage} />;  // Pass props to ColdStorageRequest
      default:
        return <div>Welcome to the Farmer's Dashboard!</div>;
    }
  };

  return (
    <div className="farmer-dashboard">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar px-3 sticky-top shadow">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand">
            <FaHome className="me-2" />
            Fresh Horizons
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggle" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#overview"
                onClick={() => setActiveTab("overview")}
                className="nav-link"
              >
                <FaHome className="me-2" />
                Dashboard
              </Nav.Link>
              <Nav.Link
                href="#profile"
                onClick={() => setActiveTab("profile")}
                className="nav-link"
              >
                <FaUser className="me-2" />
                Profile
              </Nav.Link>
              <Nav.Link href="#logout" className="nav-link">
                <FaSignOutAlt className="me-2" />
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Area */}
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col xs={12} md={3} className="sidebar vh-100 p-3 shadow-sm">
            <Nav className="flex-column">
              <Button
                className={`sidebar-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                <FaHome className="me-2" />
                Overview
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                <FaUser className="me-2" />
                Profile
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "appointment" ? "active" : ""}`}
                onClick={() => setActiveTab("appointment")}
              >
                <FaCalendarAlt className="me-2" />
                Appointment
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "notification" ? "active" : ""}`}
                onClick={() => setActiveTab("notification")}
              >
                <FaBell className="me-2" />
                Notifications
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "currentpricefeed" ? "active" : ""}`}
                onClick={() => setActiveTab("currentpricefeed")}
              >
                <FaCalendarAlt className="me-2" />
                Current Price Feed
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "billing" ? "active" : ""}`}
                onClick={() => setActiveTab("billing")}
              >
                <FaMoneyBill className="me-2" />
                Billing & Payments
              </Button>
              {/* Add Sell Bananas button */}
              <Button
                className={`sidebar-btn ${activeTab === "sellBanana" ? "active" : ""}`}
                onClick={() => setActiveTab("sellBanana")}
              >
                <FaPlusCircle className="me-2" />
                Sell Bananas
              </Button>
              {/* Add Cold Storage Request button */}
              <Button
                className={`sidebar-btn ${activeTab === "coldStorageRequest" ? "active" : ""}`}
                onClick={() => setActiveTab("coldStorageRequest")}
              >
                <FaWarehouse className="me-2" />
                Cold Storage Request
              </Button>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col xs={12} md={9} className="p-4">
            {renderContent()}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer text-center py-3">
        <Container>
          <p>© 2024 Fresh Horizons | Empowering Farmers Worldwide</p>
        </Container>
      </footer>
    </div>
  );
};

export default FarmerDashboard;
