import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaListAlt,
  FaShoppingCart,
  FaTruck,
  FaMoneyBill,
  FaBoxes,
} from "react-icons/fa";
import "./BuyerDashBoard.css";
import CommunicationWithAdmin from "./CommunicationWithAdmin";
import OrderHistory from "./OrderHistory";
import OrderPlacement from "./OrderPlacement";
import OrderTracking from "./OrderTracking";
import PaymentManagement from "./PaymentManagement";
import ProductCatalog from "./ProductCatalog";
import FooterContent from "./FooterContent";
import BhomeDash from "./BhomeDash";

const BuyerDashBoard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <BhomeDash/>;
      case "communication":
        return <CommunicationWithAdmin />;
      case "orderHistory":
        return <OrderHistory />;
      case "orderPlacement":
        return <OrderPlacement />;
      case "orderTracking":
        return <OrderTracking />;
      case "paymentManagement":
        return <PaymentManagement />;
      case "productCatalog":
        return <ProductCatalog />;
      default:
        return <div>Welcome to the Buyer Dashboard!</div>;
    }
  };

  return (
    <div className="buyer-dashboard">
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
                href="#dashboard"
                onClick={() => setActiveTab("dashboard")}
                className="nav-link"
              >
                <FaHome className="me-2" />
                Dashboard
              </Nav.Link>
              <Nav.Link
                href="#communication"
                onClick={() => setActiveTab("communication")}
                className="nav-link"
              >
                <FaUser className="me-2" />
                Communication
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Layout */}
      <Container fluid className="main-container">
        <Row className="vh-100">
          {/* Sidebar */}
          <Col xs={12} md={3} className="sidebar shadow-sm">
            <Nav className="flex-column">
              <Button
                className={`sidebar-btn ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                <FaHome className="me-2" />
                Dashboard
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "communication" ? "active" : ""}`}
                onClick={() => setActiveTab("communication")}
              >
                <FaUser className="me-2" />
                Communication
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "orderHistory" ? "active" : ""}`}
                onClick={() => setActiveTab("orderHistory")}
              >
                <FaListAlt className="me-2" />
                Order History
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "orderPlacement" ? "active" : ""}`}
                onClick={() => setActiveTab("orderPlacement")}
              >
                <FaShoppingCart className="me-2" />
                Order Placement
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "orderTracking" ? "active" : ""}`}
                onClick={() => setActiveTab("orderTracking")}
              >
                <FaTruck className="me-2" />
                Order Tracking
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "paymentManagement" ? "active" : ""}`}
                onClick={() => setActiveTab("paymentManagement")}
              >
                <FaMoneyBill className="me-2" />
                Payment Management
              </Button>
              <Button
                className={`sidebar-btn ${activeTab === "productCatalog" ? "active" : ""}`}
                onClick={() => setActiveTab("productCatalog")}
              >
                <FaBoxes className="me-2" />
                Product Catalog
              </Button>
            </Nav>
          </Col>

          {/* Content Area */}
          <Col xs={12} md={9} className="content-area">
            <div className="scrollable-content">{renderContent()}</div>
          </Col>
        </Row>
      </Container>
      <div className="footer-form-container">
      <div className="query-form">
        <h2>Quick Query For Import & Export Data</h2>
        <p className="contact-info">
          <i className="bi bi-telephone"></i> +91-9560780014
          <br />
          <i className="bi bi-envelope"></i> sales@exportimportdata.in
        </p>
        <form>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Organization Name"
                required
              />
            </div>
          </div>
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <select className="form-select" required>
                <option value="">Shipment Mode</option>
                <option value="air">Air</option>
                <option value="sea">Sea</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your Requirement (Product/HS Code)"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-submit mt-4">
            Submit
          </button>
        </form>
      </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <FooterContent />
      </footer>
    </div>
  );
};

export default BuyerDashBoard;
