import React from 'react';
import './About.css';
import NavBar from '../../Components/NavBar/NavBar.js'; // Adjust the import path as needed

const About = () => {
    return (
        <div className="about-container">
            
            <div className="slideshow-container">
            <div className="navbar-container">
                <NavBar />
            </div>
            </div>
            <div className="bottom-container">
                <p>About Us: Providing the best vehicle rental services.</p>
            </div>
        </div>
    );
}

export default About;
