// FooterComponent.js

import React from 'react';
import './Footer.css';
import logo from '../logo/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="footer-text">Beyond the Words</p>
            <img src={logo} className="d-inline-block align-top logo-footer" alt="Logo" />
            <p className="newsletter-text">
                Stay in the loop and sign up for our newsletter:
            </p>
            <div className="input-container-footer">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="email-input-footer"
                />
                <button className="subscribe-button">
                    <span className="arrow">&#10148;</span>
                </button>
            </div>
            <p className="follow-text">For more information, follow us at:</p>
            <div className="social-icons-container">
                {/* Font Awesome icons */}
                <a href="https://www.facebook.com/profile.php?id=61560009790831&mibextid=ZbWKwL"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookSquare} className="social-icon" />
                </a>
                <a href="https://www.instagram.com/beyond_the.words?igsh=d291ZjMybjJycHYz"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://m.me/306981282507309?source=qr_link_share"
                    target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare} className="social-icon" />
                </a>
                <div className="location-container">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon-footer" />
                    <p className="location-text-footer">Lahore, Pakistan</p>
                </div>
            </div>
            <hr className="horizontal-line" />
            <p className="copyright-text">&copy; Beyond the Words. All Rights reserved 2023</p>
            <p className="terms-text"> <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></p>
        </div>
    );
};

export default Footer;
