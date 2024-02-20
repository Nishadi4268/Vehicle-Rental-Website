import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="left-section"/>
            <div className="right-section">
                <i alt="Logo" className="login-logo" />
                <div className="input-container">
                    <div className='Login-topic'>Login</div>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button className="login-button">Login</button>
                    <div className="signup-text">
                        Doesn't have any account? 
                    </div>
                    <a href="#" className="signup-link">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
