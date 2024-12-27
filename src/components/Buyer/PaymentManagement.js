import React, { useState } from 'react';

const PaymentManagement = () => {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentHistory, setPaymentHistory] = useState([
    { date: '2024-12-01', amount: '$50', status: 'Completed' },
    { date: '2024-11-15', amount: '$30', status: 'Completed' },
  ]);
  const [amountDue, setAmountDue] = useState('$100');

  const handlePayment = () => {
    setPaymentStatus('Processing...');
    // Simulate a payment process (in a real app, API call would go here)
    setTimeout(() => {
      setPaymentStatus('Payment Successful!');
      setPaymentHistory([...paymentHistory, { date: new Date().toLocaleDateString(), amount: amountDue, status: 'Completed' }]);
      setAmountDue('$0');
    }, 2000);
  };

  return (
    <div className="payment-management-container">
      <h2>Payment Management</h2>

      <div className="payment-info">
        <h3>Amount Due: {amountDue}</h3>
        <h4>Payment Status: {paymentStatus || 'Pending'}</h4>
      </div>

      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <select
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
          className="payment-method-select"
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <button onClick={handlePayment} className="payment-button">
        Make Payment
      </button>

      <div className="payment-history">
        <h3>Payment History</h3>
        <ul>
          {paymentHistory.map((payment, index) => (
            <li key={index}>
              <span>{payment.date}</span> - <span>{payment.amount}</span> - <span>{payment.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentManagement;

