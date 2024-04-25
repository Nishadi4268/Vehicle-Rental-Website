import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 
import menuIcon from './Images/menu-icon.jpg'; 

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dashboard ${isOpen ? 'open' : ''}`}>
      <div className="admin-section">
        <h2>ADMIN</h2>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>
      </div>
      <div className="dashboard-links">
        <ul>
          <li><Link to="/AdminProfile">Profile</Link></li>
          <li><Link to="/PostVehicle">Post a Vehicle</Link></li>
          <li><Link to="/ManageBooking">Manage Booking</Link></li>
          <li><Link to="/ManageContactUs">Manage Contact Us</Link></li>
          <li><Link to="/RegisteredUsers">Registered Users</Link></li>
          <li><Link to="/ReviewRatings">Review & Ratings</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
