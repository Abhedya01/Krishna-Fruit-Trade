import React from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa";

const FarmerHomePage = () => {
  return (
    <div>
      {/* Header Section */}

      {/* Hero Section */}
      <section className="hero-section bg-primary text-white text-center py-5">
        <Container>
          <h1 className="fw-bold display-4 mb-3">Welcome to Banana Trade</h1>
          <p className="lead mb-4">
            A marketplace connecting farmers with global buyers. We offer seamless
            banana trading and reliable cold storage services to preserve your produce.
          </p>
          <Button variant="light" size="lg" href="#services">
            Explore Our Services
          </Button>
        </Container>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-5">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            Banana Trade is committed to empowering farmers by providing direct access
            to international markets. Our platform is designed to help you sell bananas
            and other fruits with ease and get the best prices for your produce. Additionally,
            we offer cold storage services to ensure your fruits stay fresh for longer.
          </p>
        </Container>
      </section>

      {/* Farmer Services Section */}
      <section id="services" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Services for Farmers</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <FaLeaf size={40} className="mb-3" />
                  <h5>Sell Your Bananas</h5>
                  <p>
                    List and sell your bananas to international buyers at competitive rates.
                    Get paid instantly through secure transactions.
                  </p>
                  <Button variant="success">Start Selling</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <FaLeaf size={40} className="mb-3" />
                  <h5>Sell Other Fruits</h5>
                  <p>
                    Expand your market by selling other fruits such as mangoes, pineapples,
                    and papayas. Reach a broader customer base and boost your income.
                  </p>
                  <Button variant="success">Sell Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <FaLeaf size={40} className="mb-3" />
                  <h5>Farm Consulting</h5>
                  <p>
                    Receive expert advice and support to optimize your farming practices,
                    increase yields, and make your business more sustainable.
                  </p>
                  <Button variant="success">Consult Us</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cold Storage Services Section */}
      <section id="cold-storage" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Cold Storage Services</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <h5>State-of-the-Art Storage</h5>
                  <p>
                    Preserve the freshness of your bananas and other fruits with our top-tier
                    cold storage facilities, designed to extend shelf life and prevent spoilage.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <h5>Affordable Pricing</h5>
                  <p>
                    We offer competitive rates for cold storage, starting at just $10 per ton.
                    We provide flexible terms and customizable storage plans to suit your needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <h5>24/7 Monitoring</h5>
                  <p>
                    Our cold storage units are equipped with advanced monitoring systems to
                    ensure optimal temperature and humidity levels at all times.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Banana Trade</h5>
              <p>
                We are dedicated to providing farmers with the tools and services needed
                to succeed in a global marketplace.
              </p>
            </Col>
            <Col md={6}>
              <h5>Contact Us</h5>
              <p>Email: contact@bananatrade.com</p>
              <p>Phone: +1-800-123-4567</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default FarmerHomePage;
