// AskingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AskingLoginPage.css'; // Add your own styles


const AskingPage = () => {
  const navigate = useNavigate();

  // Navigate to login page
  const handleLogin = () => {
    navigate('/login');
  };

  // Navigate to signup page
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="asking-page">
      <h2>Welcome to Fresh Horizons</h2>
      <p>Please choose an option to proceed:</p>
      <div className="buttons-container">
        <button onClick={handleLogin} className="action-button login-button">
          Login
        </button>
        <button onClick={handleSignup} className="action-button signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AskingPage;
