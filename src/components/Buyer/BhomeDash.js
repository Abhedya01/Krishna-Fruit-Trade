import React, { useState, useEffect } from "react";
import "./BuyerDashBoard.css"; // Import the CSS file

const BhomeDash = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [cart, setCart] = useState({});

  // Simulate fetching data
  useEffect(() => {
    setFeaturedProducts([
      { id: 1, name: "Cavendish Banana", price: "$1.20 / lb", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Red Banana", price: "$1.50 / lb", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Plantain Banana", price: "$0.99 / lb", image: "https://via.placeholder.com/150" },
      { id: 4, name: "Burro Banana", price: "$1.30 / lb", image: "https://via.placeholder.com/150" },
    ]);
  }, []);

  // Handle adding and removing quantities
  const updateCart = (productId, increment) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (increment) {
        newCart[productId] = (newCart[productId] || 0) + 1;
      } else if (newCart[productId]) {
        newCart[productId] -= 1;
        if (newCart[productId] <= 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome Back!</h1>
        <p>Explore our banana varieties and add them to your cart!</p>
      </header>

      {/* Featured Products Section */}
      <section>
        <h2 className="section-title">Banana Varieties</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onAdd={() => updateCart(product.id, true)}
              onRemove={() => updateCart(product.id, false)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product, quantity, onAdd, onRemove }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h4>{product.name}</h4>
    <p>{product.price}</p>
    {quantity === 0 ? (
      <button className="btn-add-to-cart" onClick={onAdd}>
        Add to Cart
      </button>
    ) : (
      <div className="btn-quantity-control">
        <button className="btn-quantity" onClick={onRemove}>
          -
        </button>
        <span>{quantity}</span>
        <button className="btn-quantity" onClick={onAdd}>
          +
        </button>
      </div>
    )}
  </div>
);

export default BhomeDash;
