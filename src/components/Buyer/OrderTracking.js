import React, { useState } from 'react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  // Sample order statuses (this could come from an API or database)
  const sampleOrderStatuses = {
    '12345': 'In Progress',
    '67890': 'Shipped',
    '11121': 'Delivered',
  };

  const handleTrackOrder = () => {
    // Simulate fetching order status based on orderId
    if (sampleOrderStatuses[orderId]) {
      setOrderStatus(sampleOrderStatuses[orderId]);
    } else {
      setOrderStatus('Order not found');
    }
  };

  return (
    <div className="order-tracking-container">
      <h2>Track Your Order</h2>
      <div className="order-tracking-input">
        <input
          type="text"
          placeholder="Enter your Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="order-tracking-input-field"
        />
        <button onClick={handleTrackOrder} className="order-tracking-button">
          Track Order
        </button>
      </div>
      {orderStatus && (
        <div className="order-tracking-status">
          <h3>Order Status:</h3>
          <p>{orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
