import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Add your own styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (add more as required)
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Example authentication (replace with real authentication logic)
    if (email === 'a@e.com' && password === '123') {
      // Redirect to dashboard or other appropriate page
      navigate('/farmer-dashboard');
    }else if(email === 'a@e.com' && password === '1234'){
      navigate('/buyer-dashboard')
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
