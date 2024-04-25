import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo"></div>
            <button className="navbar-cart" />
            <div className="nav-links">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About Us</a>
                <a href="#" className="nav-link">Blog</a>
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
