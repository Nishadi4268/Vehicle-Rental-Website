import React, { useState } from 'react';
import './PostVehicle.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import Dashboard from '../Components/DashBoard/Dashboard.jsx';

const PostVehicle = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <NavigationBar />
      <Dashboard />
      <div className="post-vehicle-page">
        <div className="left-section">
          <div className="vehicle-details">
            <h2>Post Vehicle Details</h2>
            <div className="form-group">
              <label htmlFor="vehicle-title">Vehicle Title:</label>
              <input type="text" id="vehicle-title" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle-overview">Vehicle Overview:</label>
              <textarea id="vehicle-overview"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="price-per-day">Price per Day:</label>
              <input type="text" id="price-per-day" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle-number">Vehicle Number:</label>
              <input type="text" id="vehicle-number" />
            </div>
            <div className="form-group">
              <label htmlFor="add-image">Add Image:</label>
              <input type="file" id="add-image" accept="image/*" onChange={handleImageChange} />
              {selectedImage && (
                <div className="image-preview">
                  <img src={selectedImage} alt="Selected Image" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="select-brand">
            <label>Select Brand:</label>
            <select>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              <option value="brand3">Brand 3</option>
            </select>
          </div>
          <div className="fuel-type">
            <label>Fuel Type:</label>
            <select>
              <option value="fuel1">Fuel 1</option>
              <option value="fuel2">Fuel 2</option>
              <option value="fuel3">Fuel 3</option>
            </select>
          </div>
          <div className="seating-capacity">
            <label>Seating Capacity:</label>
            <select>
              <option value="capacity1">Capacity 1</option>
              <option value="capacity2">Capacity 2</option>
              <option value="capacity3">Capacity 3</option>
            </select>
          </div>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default PostVehicle;
