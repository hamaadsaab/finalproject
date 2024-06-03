


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Added faTimes
import { faHome, faUser, faAddressBook, faCog } from '@fortawesome/free-solid-svg-icons';
import './Logout.css';
import weblogo from '../logo/logo.jpg';
import user_image from '../images/user_image.jpg';
const Logout = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleReasonChange = (event) => {
        setSelectedReason(event.target.value);
    };

    const handleLogout = () => {
        if (!selectedReason) {
            alert("Please select a reason for deleting your account.");
            return;
        }
        // Add logic to handle logout and delete account with the selected reason
        console.log(`Logout and Delete Account Reason: ${selectedReason}`);
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const passwordInputClassName = `form-control ${showPassword ? 'show-password' : ''}`;


    return (
        <>
            <div className='Header-logout'>

                {/* <button className="logout-btn">
                    <FontAwesomeIcon icon={faSignOutAlt} />{'     '}  LOGOUT
                </button> */}
                <img
                    src={weblogo}
                    className="d-inline-block align-top weblogo-logout"
                    alt="Logo"
                />

            </div>

            <div className="user-info-container-logout">
                {/* Image */}
                <div className="user-image-container-logout">
                    <img
                        src={user_image}
                        className="user-image "
                        alt="user"
                    />
                    <p>WELCOME,HAMAAD!</p>
                </div>
            </div>

            {/* Navigation links with icons */}
            <div className="nav-links">
                <Link to="/landingpage" className="nav-link home-link" activeClassName="active-link" exact>
                    <span className='linkto-home'><FontAwesomeIcon icon={faHome} /> Home Feed</span>
                </Link>

                <Link to="/accounts" className="nav-link link-under" activeClassName="active-link">
                    <span className="under-links"><FontAwesomeIcon icon={faUser} /> Account</span>  <hr className="horizontal" />
                </Link>

                <Link to="/addcontacts" className="nav-link link-under" activeClassName="active-link">
                    <span className="under-links"><FontAwesomeIcon icon={faAddressBook} /> Contacts </span> <hr className="horizontal" />
                </Link>

                <Link to="/settings" className="nav-link link-under settings-link" activeClassName="active-link">
                    <span className="under-links "><FontAwesomeIcon icon={faCog} /> Settings </span>
                </Link>
            </div>
            <div className='deleteAcount'>
                <h1 className='underAcount'>DELETE YOUR ACOUNT </h1><br />
                <h1 className='heyuser'>Hey! user</h1>
                <p className='sorry underAcount'>We're sorry to hear that you want to delete your acount...</p>
                <p className='deleting'>  Why are you deleting your acount</p>
                <select value={selectedReason} onChange={handleReasonChange} className="reason-dropdown">
                    <option value="" disabled>Select a reason</option>
                    <option value="reason1">Reason 1</option>
                    <option value="reason2">Reason 2</option>
                    {/* Add more reasons as needed */}
                </select>
                <p> Are you sure, you want to delete your acount  </p>
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
                <Link to='/login'>
                    <button className="delete-account-btn" onClick={handleLogout}>
                        DELETE ACCOUNT
                    </button>
                </Link>

            </div >



        </>
    );
};

export default Logout;