import React, { useState } from 'react';
import './SignUp.css';

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
        <div className="signup-container">
            <div className="signup-left-section" />
            <div className="signup-right-section">
                <i alt="Logo" className="signup-logo" />
                <div className="signup-input-container">
                    <div className='Signup-topic'>Sign Up</div>
                    <input type="text" placeholder="Username" />
                    <div className="name-inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="email-input">
                        <i className="fa fa-envelope"></i>
                        <input type="text" placeholder="Email/Phone (+94)" />
                    </div>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    {passwordMatchError && <div className="password-error">*****Passwords do not match</div>}
                    <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
                    <div className="signup-login-text">
                        Already have an account? 
                    </div>
                    <a href="#" className="signup-login-link">Log In</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
