import React from 'react';
import './UDashboard.css'; 
import NavBar from '../NavBar/NavBar.js';

const UDashboard = () => {
  return (
    <div>
    <NavBar/>
    <div className="adashboard">
      <h2 className='Dashboard'>Dashboard</h2>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Review and Ratings</a></li>
      </ul>
    </div>
    </div>
    
  );
};

export default UDashboard;
