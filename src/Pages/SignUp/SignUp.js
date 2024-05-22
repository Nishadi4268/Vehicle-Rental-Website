import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavBar from '../../Components/NavBar/NavBar';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatchError(false); // Reset the error when the password changes
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatchError(false); // Reset the error when the confirm password changes
    };

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setPasswordMatchError(true);
        } else {
            // Submit the form or perform other actions
        }
    };

    return (
        <div>
        <NavBar />
        <div className="signup-container">
            <div className="signup-left-section" />
            <div className="signup-right-section">
                <i alt="Logo" className="signup-logo" />
                <div className="signup-input-container">
                    <div className='Signup-topic'>Sign Up</div>
                    <input classNametype="text" placeholder="Username" />
                    <div className="name-inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                        <input classNametype="text" placeholder="Email/Phone (+94)" />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    {passwordMatchError && <div className="password-error">*****Password does not match</div>}
                    <button className="signup-button1" onClick={handleSubmit}>
                        <Link to="/login">Sign Up</Link>
                    </button>
                    <div className="signup-login-text">
                        Already have an account? 
                    </div>
                    <Link to="/login" className="signup-login-link">Log In</Link>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default SignUp;
