import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import logo from '../logo/logo.jpg';
import handImage from '../images/hands.jpeg';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

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

        if (formData.email && formData.password) {
            try {
                const response = await axios.post('http://localhost:3002/api/login', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    // Login successful
                    toast.success('Login successful!', {
                        position: 'top-right',
                        duration: 5000,
                    });
                    setTimeout(() => {
                        navigate('/webcams');
                    }, 2000);
                } else {
                    // Handle other server errors
                    toast.error(`Login failed: ${response.data.message}`, {
                        position: 'top-right',
                        duration: 5000,
                    });
                    toast.error("Signin Failed");
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Invalid email or password.', {
                    position: 'top-right',
                    duration: 5000,
                });
            }
        } else {
            toast.error('Please fill in all fields before submitting.', {
                position: 'top-right',
                duration: 5000,
            });
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
                    <div className="card">
                        <div className="card-body text-center">
                            <p>Welcome back!</p>
                            <h3 className="card-title">LOGIN TO YOUR ACCOUNT</h3>
                            <form onSubmit={handleSubmit}>
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

                                <button type="submit" className="btn btn-primary">
                                    Login Now!
                                </button>
                            </form>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between align-items-start">
                                    <span className="float-end">
                                        <b>Not Registered yet?</b>
                                        <br />
                                        <Link to="/forgetpassword" className="btn btn-link forget-text">
                                            <b>Forgot Password</b>
                                        </Link>
                                    </span>
                                    <span className="text-muted">
                                        <Link to="/signup" className="btn btn-link signup-text">
                                            <b>SIGN UP HERE</b>
                                        </Link>
                                        <br />
                                        <Link to="/resetpassword" className="btn btn-link reset-text">
                                            <b>RESET PASSWORD</b>
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

export default Login;
