import React, { useState, useRef } from 'react';


function Appointment() {
  const [formData, setFormData] = useState({
    firstName: 'Farmer Name',  // Pre-filled from profile
    farmName: '',
    productType: '',
    quantity: '',
    pricePerUnit: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    termsAccepted: false,
    location: { lat: null, lng: null },  // Store location
  });

  const [address, setAddress] = useState('');
  const mapRef = useRef(null);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setFormData({
      ...formData,
      location: { lat, lng },
    });



    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data: ', formData);
  };

  return (
    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
      {/* Farmer Details */}
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">Farmer Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          disabled
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="farmName" className="form-label">Farm Name</label>
        <input
          type="text"
          className="form-control"
          id="farmName"
          name="farmName"
          value={formData.farmName}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Product Details */}
      <div className="col-md-6">
        <label htmlFor="productType" className="form-label">Product Type</label>
        <select
          className="form-select"
          id="productType"
          name="productType"
          value={formData.productType}
          onChange={handleInputChange}
          required
        >
          <option value="">Choose...</option>
          <option value="bananas">Bananas</option>
          <option value="mangoes">Mangoes</option>
          <option value="pineapples">Pineapples</option>
          <option value="papayas">Papayas</option>
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="quantity" className="form-label">Quantity (kg)</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="pricePerUnit" className="form-label">Price per Unit ($)</label>
        <input
          type="number"
          className="form-control"
          id="pricePerUnit"
          name="pricePerUnit"
          value={formData.pricePerUnit}
          onChange={handleInputChange}
          required
        />
      </div>

     

      {/* Address Section */}
      <div className="col-md-12">
        <label htmlFor="address" className="form-label">Farm Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Terms and Conditions */}
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            required
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            I agree to the terms and conditions.
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit Appointment
        </button>
      </div>
    </form>
  );
}

export default Appointment;
