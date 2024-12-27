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
  FaBars,
  FaSignOutAlt,
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
import BuyerProfile from "./BuyerProfile"; // Import the BuyerProfile component

const BuyerDashBoard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState("John Doe");

  // Handle logout logic
  const handleLogout = () => {
    alert("User logged out!");
  };

  // Handle profile photo upload
  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <BhomeDash />;
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
      case "buyerProfile":
        return <BuyerProfile userPhoto={userPhoto} userName={userName} />; // Pass user photo and name
      default:
        return <div>Welcome to the Buyer Dashboard!</div>;
    }
  };

  return (
    <div className="buyer-dashboard">
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

              {/* Profile Dropdown */}
              <Nav.Item
                className="nav-link user-logo"
                onMouseEnter={() => setShowProfileMenu(true)}
                onMouseLeave={() => setShowProfileMenu(false)}
              >
                <div className="user-photo-container">
                  <img
                    src={userPhoto || "https://via.placeholder.com/40"}
                    alt="User"
                    className="user-photo"
                  />
                  <span className="user-name">{userName}</span>
                </div>
                {showProfileMenu && (
                  <div className="profile-menu shadow-sm">
                    <div
                      className="menu-item"
                      onClick={() => setActiveTab("buyerProfile")}
                    >
                      Profile
                    </div>
                    <div
                      className="menu-item"
                      onClick={() => setActiveTab("orderHistory")}
                    >
                      Orders
                    </div>
                    <div
                      className="menu-item"
                      onClick={() => alert("Go to Notifications")}
                    >
                      Notifications
                    </div>
                    <div className="menu-item" onClick={handleLogout}>
                      <FaSignOutAlt className="me-2" />
                      Logout
                    </div>
                  </div>
                )}
              </Nav.Item>

              {/* Profile Upload Button */}
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                onChange={handleProfileUpload}
                style={{ display: "none" }}
              />
              <label htmlFor="profile-upload" className="btn btn-link">
                Upload Profile Photo
              </label>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Layout */}
      <Container fluid className="main-container">
        <Row className="vh-100">
          {/* Sidebar */}
          <Col
            xs={sidebarCollapsed ? 1 : 12}
            md={sidebarCollapsed ? 1 : 3}
            className={`sidebar shadow-sm ${sidebarCollapsed ? "collapsed" : ""}`}
          >
            <div
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <FaBars />
            </div>
            {!sidebarCollapsed && (
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
                <Button
                  className={`sidebar-btn ${activeTab === "buyerProfile" ? "active" : ""}`}
                  onClick={() => setActiveTab("buyerProfile")}
                >
                  <FaUser className="me-2" />
                  Profile
                </Button>
              </Nav>
            )}
          </Col>

          {/* Content Area */}
          <Col xs={sidebarCollapsed ? 11 : 9} md={sidebarCollapsed ? 11 : 9} className="content-area">
            <div className="scrollable-content">{renderContent()}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuyerDashBoard;
