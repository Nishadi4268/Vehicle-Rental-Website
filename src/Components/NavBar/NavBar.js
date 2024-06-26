import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"></div>
            <button className="navbar-cart" />
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link> {/* Use Link instead of <a> */}
                <Link to="/About" className="nav-link">About Us</Link>
                <Link to="PackageOffer" className="nav-link">Offers</Link>
                <a href="#" className="nav-link">Contacts</a>
                <a href="#" className="nav-link">Account</a>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-input"/>
                <button className="search-icon"></button>
            </div>
        </div>
    );
}

export default NavBar;
