import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavBar from '../../Components/NavBar/NavBar';

const Login = () => {
    return (
        <div>
        <NavBar />
        <div className="login-container">
            <div className="left-section-Login"/>
            <div className="right-section">
                <i alt="Logo" className="login-logo" />
                <div className="input-container">
                    <div className='Login-topic'>Login</div>
                    <input classNametype="text" placeholder="User name" />
                    <input type="password" placeholder="Password" />
                    <Link to="/fogotpassword" className="forgot-password">Forgot password?</Link>
                    <button className="login-button">Login</button>
                    <div className="signup-text">
                        Doesn't have any account? 
                    </div>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>
    );
}

export default Login;
