import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/logo.jpg';
import handImage from '../images/hands.jpeg';
import './ResetPassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordInputClassName = `form-control ${showPassword ? 'show-password' : ''}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:3002/api/reset-password', { // URL should be correct now
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, newPassword: password })
            });

            const contentType = response.headers.get('Content-Type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response format: ${text}`);
            }

            console.log('Response data:', data); // Log the response data for debugging

            if (response.ok) {
                alert(data.message);
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                alert(data.message || 'Error resetting password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.message || 'An unexpected error occurred');
        }
    };


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className='back-btn'>
                        <Link to="/landingpage" className="btn btn-link">
                            <button>GO BACK</button>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-start logo-container">
                        <img src={logo} className="d-inline-block align-top logo mb-3" alt="Logo" />
                        <img src={handImage} className="d-inline-block align-top hand-image" alt="Hand" />
                    </div>
                </div>

                <div className="col-md-6 login-container">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className="card-title">Reset your password</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-start">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 password-input">
                                    <label htmlFor="password" className="form-label text-start">
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className={passwordInputClassName}
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                            {showPassword ? (
                                                <FontAwesomeIcon icon={faEye} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 password-input">
                                    <label htmlFor="confirm-password" className="form-label text-start">
                                        Confirm Password
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className={passwordInputClassName}
                                            id="confirm-password"
                                            placeholder="Re-enter your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                            {showPassword ? (
                                                <FontAwesomeIcon icon={faEye} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Reset!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
