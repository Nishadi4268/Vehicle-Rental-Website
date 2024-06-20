import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalCost, setAdditionalCost] = useState(0);

  const featureCosts = {
    'Baby seat': 1000,
    '2 bags': 2300,
    'WiFi': 1000,
    'A/C': 2000,
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
      setAdditionalCost(additionalCost + featureCosts[value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
      setAdditionalCost(additionalCost - featureCosts[value]);
    }
  };

  return (
    <div className="booking-container">
      <div className="car-details-page">
        <div className="car-details">
          <div className="car-info">
            <div>
              <h2>Car 1</h2>
              <img src="car-image-url" alt="Car" className="car-image" />
              <div className="car-options">
                <label className="car-option">
                  <input
                    type="checkbox"
                    name="carOption"
                    value="Baby seat"
                    onChange={handleCheckboxChange}
                  />
                  Baby seat (Rs.1000)
                </label>
                <label className="car-option">
                  <input
                    type="checkbox"
                    name="carOption"
                    value="2 bags"
                    onChange={handleCheckboxChange}
                  />
                  2 bags (Rs.2300)
                </label>
                <label className="car-option">
                  <input
                    type="checkbox"
                    name="carOption"
                    value="WiFi"
                    onChange={handleCheckboxChange}
                  />
                  WiFi (Rs.1000)
                </label>
                <label className="car-option">
                  <input
                    type="checkbox"
                    name="carOption"
                    value="A/C"
                    onChange={handleCheckboxChange}
                  />
                  A/C (Rs.2000)
                </label>
              </div>
            </div>
          </div>
          <div className="price-inclusions">
            <h4>Included in the price:</h4>
            <ul>
              <li>Free Cancellation</li>
              <li>Price Guarantee</li>
              <li>Theft Protection</li>
              <li>Instantly Confirmed</li>
              <li>Third Party Liability</li>
              <li>Damage Waiver</li>
            </ul>
          </div>

          <div className="rating">4.7 Excellent (188 reviews)</div>
        </div>

        <div className="confirmation">
          Instant Confirmation: This vehicle is available now. You will get your confirmation immediately.
        </div>

        <div className="driver-details">
          <h3>Driver Details</h3>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="driverAge">Driver Age</label>
              <input type="text" id="driverAge" name="driverAge" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="text" id="mobileNumber" name="mobileNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="NICNumber">NIC Number</label>
              <input type="text" id="NICNumber" name="NICNumber" />
            </div>
          </form>
        </div>

        <div className="booking-summary">
          <div className="price-summary">
            <h4>Price Summary</h4>
            <p>Car rental fee: $250</p>
            <p>Additional features: ${additionalCost}</p>
            <p>Total Amount: ${250 + additionalCost}</p>
          </div>

          <div className="book-now-container">
            <button className="book-now">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
