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
  FaWarehouse,
  FaBars, // Menu icon
} from "react-icons/fa";
import "./FarmerDashBoard.css";
import Appointment from "./Appointment";
import FarmerProfile from "./FarmerProfile";
import CurrentPriceFeed from "./CurrentPriceFeed";
import Notification from "./Notification";
import BillingPayments from "./BillingPayments";
import SellBanana from "./SellBanana";
import ColdStorageRequest from "./ColdStorageRequest";
import FarmerHomePage from "./FarmerHomePage";

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [storageRent, setStorageRent] = useState("Rs. 50/day");
  const [remainingStorage, setRemainingStorage] = useState(1000);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleStorageUpdate = (newStorageRent, newRemainingStorage) => {
    setStorageRent(newStorageRent);
    setRemainingStorage(newRemainingStorage);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "farmerHomePage":
        return <FarmerHomePage/>;
      case "profile":
        return <FarmerProfile />;
      case "appointment":
        return <Appointment />;
      case "currentpricefeed":
        return <CurrentPriceFeed onStorageUpdate={handleStorageUpdate} />;
      case "notification":
        return <Notification />;
      case "billing":
        return <BillingPayments />;
      case "sellBanana":
        return <SellBanana />;
      case "coldStorageRequest":
        return (
          <ColdStorageRequest
            storageRent={storageRent}
            remainingStorage={remainingStorage}
          />
        );
      default:
        return <div>Welcome to the Farmer's Dashboard!</div>;
    }
  };

  return (
    <div className="farmer-dashboard">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar px-3 sticky-top shadow">
        <Container>
          <Button variant="link" className="menu-btn" onClick={toggleSidebar}>
            <FaBars size={24} />
          </Button>
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
          {isSidebarVisible && (
            <Col
              xs={12}
              md={4}
              className="sidebar vh-100 p-3 shadow-sm"
              style={{ position: "fixed", top: 0, left: 0, marginTop: "56px" }} // Adjust for navbar height
            >
              <Nav className="flex-column">
                <Button
                  className={`sidebar-btn ${activeTab === "farmerHomePage" ? "active" : ""}`}
                  onClick={() => setActiveTab("farmerHomePage")}
                >
                  <FaHome className="me-2" />
                  Farmer HomePage
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
                <Button
                  className={`sidebar-btn ${activeTab === "sellBanana" ? "active" : ""}`}
                  onClick={() => setActiveTab("sellBanana")}
                >
                  <FaPlusCircle className="me-2" />
                  Sell Bananas
                </Button>
                <Button
                  className={`sidebar-btn ${activeTab === "coldStorageRequest" ? "active" : ""}`}
                  onClick={() => setActiveTab("coldStorageRequest")}
                >
                  <FaWarehouse className="me-2" />
                  Cold Storage Request
                </Button>
              </Nav>
            </Col>
          )}

          {/* Main Content */}
          <Col
            xs={12}
            md={isSidebarVisible ? 8 : 12}
            className=" main-content"
            style={{
              marginLeft: isSidebarVisible ? "25%" : "0",
              marginTop: "20px", // Adjust for navbar height
            }}
          >
            {renderContent()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FarmerDashboard;
