import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const CurrentPriceFeed = ({ bananaPrice, onBananaPriceUpdate, onStorageUpdate }) => {
  const [storage, setStorage] = useState(1000); // Total storage in kg
  const [usedStorage, setUsedStorage] = useState(0); // Used storage in kg
  const [remainingStorage, setRemainingStorage] = useState(1000); // Remaining storage in kg
  const [storageRent, setStorageRent] = useState("Rs. 50/day"); // Storage rent per day
  const [newBananaPrice, setNewBananaPrice] = useState(""); // Input for new banana price
  const [newStorageRent, setNewStorageRent] = useState(""); // Input for new storage rent
  const [newStorageAmount, setNewStorageAmount] = useState(""); // Amount of bananas a farmer wants to store

  useEffect(() => {
    // Pass the updated storage rent and remaining storage to parent component
    onStorageUpdate(storageRent, remainingStorage);
  }, [storageRent, remainingStorage, onStorageUpdate]);

  // Function to store bananas
  const handleStoreBananas = () => {
    const amountToStore = parseInt(newStorageAmount);
    if (amountToStore && amountToStore <= remainingStorage) {
      setUsedStorage(usedStorage + amountToStore);
      setRemainingStorage(remainingStorage - amountToStore);
      setNewStorageAmount(""); // Reset input
    } else {
      alert("Not enough storage or invalid input.");
    }
  };

  // Function to update banana price (admin only)
  const handleUpdateBananaPrice = () => {
    if (newBananaPrice) {
      onBananaPriceUpdate(newBananaPrice); // Update in parent component
      setNewBananaPrice(""); // Reset input
    }
  };

  // Function to update storage rent (admin only)
  const handleUpdateStorageRent = () => {
    if (newStorageRent) {
      setStorageRent(newStorageRent);
      setNewStorageRent(""); // Reset input
    }
  };

  return (
    <div className="price-feed">
      <h2 className="mb-4">Storage and Price Information</h2>

      {/* Display current storage details */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Storage Information</Card.Title>
          <Card.Text>
            Total Storage: {storage} kg<br />
            Used Storage: {usedStorage} kg<br />
            Remaining Storage: {remainingStorage} kg
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Input for the farmer to store bananas */}
      <Form className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter amount of bananas to store (in kg)"
          value={newStorageAmount}
          onChange={(e) => setNewStorageAmount(e.target.value)}
        />
      </Form>
      <Button variant="primary" size="sm" className="mb-3" onClick={handleStoreBananas}>
        Store Bananas
      </Button>

      {/* Display banana price and storage rent */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Current Banana Price</Card.Title>
          <Card.Text>{bananaPrice}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Storage Rent</Card.Title>
          <Card.Text>{storageRent}</Card.Text>
        </Card.Body>
      </Card>

      {/* Admin only section to update banana price and storage rent */}
      <h3>Admin Actions</h3>
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter new banana price"
          value={newBananaPrice}
          onChange={(e) => setNewBananaPrice(e.target.value)}
        />
      </Form>
      <Button variant="secondary" size="sm" className="mb-3" onClick={handleUpdateBananaPrice}>
        Update Banana Price
      </Button>

      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter new storage rent"
          value={newStorageRent}
          onChange={(e) => setNewStorageRent(e.target.value)}
        />
      </Form>
      <Button variant="secondary" size="sm" className="mb-3" onClick={handleUpdateStorageRent}>
        Update Storage Rent
      </Button>
    </div>
  );
};

export default CurrentPriceFeed;
