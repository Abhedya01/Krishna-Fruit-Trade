import React from "react";
import { Table, Container, Badge, Card } from "react-bootstrap";
import "./BuyerDashBoard.css"; // Import custom CSS

const OrderHistory = () => {
  // Sample data for order history
  const orders = [
    {
      id: "001",
      category: "Vegetables",
      quantity: "10 kg",
      paymentStatus: "Paid",
      user: "John Doe",
      orderDate: "2024-12-20",
      deliveryStatus: "Delivered",
      totalPrice: "$50",
    },
    {
      id: "002",
      category: "Fruits",
      quantity: "5 kg",
      paymentStatus: "Pending",
      user: "Jane Smith",
      orderDate: "2024-12-22",
      deliveryStatus: "In Transit",
      totalPrice: "$30",
    },
    {
      id: "003",
      category: "Grains",
      quantity: "20 kg",
      paymentStatus: "Paid",
      user: "Mike Ross",
      orderDate: "2024-12-25",
      deliveryStatus: "Pending",
      totalPrice: "$80",
    },
  ];

  const getBadgeVariant = (status) => {
    switch (status) {
      case "Paid":
        return "success";
      case "Pending":
        return "warning";
      case "Delivered":
        return "success";
      case "In Transit":
        return "info";
      default:
        return "secondary";
    }
  };

  return (
    <div className="order-history-container mt-4">
      <div className="custom-card-header text-center">
        <h3>Order History</h3>
      </div>
      <Container>
        <Card className="custom-card shadow-lg">
          <Card.Body className="p-4">
            <Table className="custom-table text-center" responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Payment Status</th>
                  <th>User</th>
                  <th>Order Date</th>
                  <th>Delivery Status</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.category}</td>
                    <td>{order.quantity}</td>
                    <td>
                      <Badge bg={getBadgeVariant(order.paymentStatus)}>
                        {order.paymentStatus}
                      </Badge>
                    </td>
                    <td>{order.user}</td>
                    <td>{order.orderDate}</td>
                    <td>
                      <Badge bg={getBadgeVariant(order.deliveryStatus)}>
                        {order.deliveryStatus}
                      </Badge>
                    </td>
                    <td className="price">{order.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer className="text-center custom-card-footer">
            <small className="text-muted">
              © 2024 Fresh Horizons | Empowering Farmers Worldwide
            </small>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default OrderHistory;
