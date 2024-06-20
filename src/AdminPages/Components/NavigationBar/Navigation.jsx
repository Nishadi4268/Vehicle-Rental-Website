
import React from 'react';
import logo from './Images/Logo.png'; 
import cart from './Images/cart.png'; 
import searchIcon from './Images/search-icon.png'; // Import your search icon image
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Navigation.css'; // Import CSS file for styling

const NavigationBar = () => {
  return (
    <div className='black-bar'>
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="cart">
        <img src={cart} alt="cart" />
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/About" className="nav-link">ABOUT</Link></li>
          <li><Link to="/PackageOffer" className="nav-link">OFFERS</Link></li>
          <li><Link to="/contact" className="nav-link">CONTACT US</Link></li>
          <li><Link to="/login" className="nav-link">LOGIN</Link></li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="Search" />
      </div>
    </div>
    </div>
  );
}

export default NavigationBar;
