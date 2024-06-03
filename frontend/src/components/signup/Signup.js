import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo/logo.jpg';
import handImage from '../images/hands.jpeg';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'sonner';
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password && formData.confirmPassword) {
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            try {
                const response = await axios.post('http://localhost:3002/api/signup', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 201) {
                    // Handle successful signup
                    navigate('/login');
                }
                // else if (response.status === 400 && response.data.message === 'Email already in use') {
                //     // Handle email already in use error
                //     setError(response.data.message);
                // }
                else {
                    // Handle other server errors
                    toast.error("Signup Failed");
                    // alert(`Signup failed: ${response.data.message}`);

                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("Email already Exist");


            }
        } else {
            alert('Please fill in all fields before submitting.');
        }
    };


    const passwordInputClassName = `form-control ${showPassword ? 'show-password' : ''}`;

    return (
        <div className="container mt-5">
            <Toaster richColors closeButton={true} position='top-right' />
            <div className="row">
                <div className="col-md-6">
                    <div className='back-btn'>
                        <Link to="/landingpage" className="btn btn-link">
                            <button>GO BACK</button>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-start logo-container">
                        <img
                            src={logo}
                            className="d-inline-block align-top logo mb-3"
                            alt="Logo"
                        />
                        <img
                            src={handImage}
                            className="d-inline-block align-top hand-image"
                            alt="Hand"
                        />
                    </div>
                </div>

                <div className="col-md-6 login-container">
                    <div className="card card-con">
                        <div className="card-body text-center">
                            <p>let's get started!</p>
                            <h3 className="card-title">Sign up your Account</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-start">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        style={{ backgroundColor: 'black', color: 'white' }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-start">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
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
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                        />
                                        <div
                                            className="password-toggle-icon"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <FontAwesomeIcon icon={faEye} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 password-input">
                                    <label htmlFor="confirmPassword" className="form-label text-start">
                                        Confirm Password
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className={passwordInputClassName}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="Re-Enter your password"
                                        />
                                        <div
                                            className="password-toggle-icon"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <FontAwesomeIcon icon={faEye} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <button type="submit" className="btn btn-primary">
                                    Sign Up!
                                </button>
                            </form>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between align-items-start">
                                    <span className="float-end">
                                        <b>Already have an account?</b>
                                    </span>
                                    <span className="text-muted">
                                        <Link to="/login" className="btn btn-link login-text">
                                            <b>Login here!</b>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
