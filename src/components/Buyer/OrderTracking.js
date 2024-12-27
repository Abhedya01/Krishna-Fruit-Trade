import React from 'react';
import './BuyerDashBoard.css'; // For custom styles

const OrderTracking = () => {
  const orderDetails = {
    name: 'Rohit Kshirsagar',
    address: 'WHITE HOUSE CDAC MET HOSTEL NASHIK, XQJG+M47, Sadashiv Nagar, Sadguru Nagar, Nashik - 422009, Maharashtra',
    phone: '7887644654',
    item: {
      name: 'boAt Nirvana Ion with 120 Hours Playback',
      color: 'Black',
      seller: 'Namepic',
      price: '₹1,602',
      deliveryStatus: [
        { date: 'Sun, 22nd Dec', status: 'Order Confirmed' },
        { date: 'Mon, 23rd Dec', status: 'Shipped' },
        { date: 'Wed, 25th Dec', status: 'Out for Delivery' },
        { date: 'Wed, 25th Dec', status: 'Delivered' }
      ],
      returnPolicy: 'Jan 01, 2025'
    }
  };

  return (
    <div className="order-tracking">
      <div className="delivery-address">
        <h3>Delivery Address</h3>
        <p>{orderDetails.name}</p>
        <p>{orderDetails.address}</p>
        <p>Phone number: {orderDetails.phone}</p>
      </div>

      <div className="order-details">
        <h3>Order Details</h3>
        <div className="item">
          <p><strong>{orderDetails.item.name}</strong></p>
          <p>Color: {orderDetails.item.color}</p>
          <p>Seller: {orderDetails.item.seller}</p>
          <p>Price: {orderDetails.item.price}</p>
        </div>
        <div className="tracking">
          <h4>Tracking</h4>
          <ul>
            {orderDetails.item.deliveryStatus.map((status, index) => (
              <li key={index}>
                <span>{status.date}</span>: <strong>{status.status}</strong>
              </li>
            ))}
          </ul>
        </div>
        <p>Return policy valid till: {orderDetails.item.returnPolicy}</p>
      </div>
    </div>
  );
};

export default OrderTracking;
