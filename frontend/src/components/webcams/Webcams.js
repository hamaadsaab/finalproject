


import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUser, faAddressBook, faCog, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons';
import './webcams.css';
import weblogo from '../logo/logo.jpg';
import user_image from '../images/user_image.jpg';
const Webcams = () => {
    return (
        <>
            <div className='Header'>

                <button className="logout-btn">
                    <FontAwesomeIcon icon={faSignOutAlt} />{'     '}  LOGOUT
                </button>
                <img
                    src={weblogo}
                    className="d-inline-block align-top web-logo"
                    alt="Logo"
                />

            </div>

            <div className="user-info-container-webcam">
                {/* Image */}
                <div className="user-image-container-webcam">
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
            {/* Video call and search buttons with icons */}
            {/* Video call and search buttons with icons */}
            <div className="web-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-div first-div">
                            {/* Video Call */}
                            <FontAwesomeIcon icon={faVideo} className='video-icon' />
                            <Link to="/webmodel" className="video-call-link">
                                {/* <FontAwesomeIcon icon={faVideo} className='video-icon' /> */}
                                <button className="video-call-btn">
                                    VIDEO CALL
                                </button>
                            </Link>
                        </div>
                        <div className="inner-div">
                            {/* Search */}
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <button className="search-button btn-search">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Webcams;