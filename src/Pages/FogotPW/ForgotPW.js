import React, { useState } from 'react';
import './ForgotPW.css';
import NavBar from '../../Components/NavBar/NavBar';

const ForgotPW = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            console.log('Passwords match');
        }
    };

    return (
        <div>
            <NavBar />
            <div className="reset-password-container">
                <div className="left-section" />
                <div className="right-section">
                    <i alt="Logo" className="reset-password-logo" />
                    <div className="input-container">
                        <div className='ResetPassword-topic'>Reset Password</div>
                        <input
                            type="text"
                            placeholder="User Name"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {error && <div className="error-message">{error}</div>}
                        <button
                            className="reset-password-button"
                            onClick={handleSubmit}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPW;
