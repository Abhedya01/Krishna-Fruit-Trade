import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [role, setRole] = useState(""); // Stores the selected role
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle role selection
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData, "Role:", role);
    alert(`Signup successful for ${role}`);
    // Add logic to send data to your backend API
  };

  return (
    <div className="signup-form-container">
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="form-group">
          <label htmlFor="role">I am a:</label>
          <select id="role" value={role} onChange={handleRoleChange} required>
            <option value="">Select Role</option>
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
          </select>
        </div>

        {/* Conditional Fields for Farmer */}
        {role === "Farmer" && (
          <div className="form-group">
            <label htmlFor="farmSize">Farm Size (in acres):</label>
            <input
              type="number"
              id="farmSize"
              name="farmSize"
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Conditional Fields for Buyer */}
        {role === "Buyer" && (
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
