import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import flagman from '../images/flag_man.jpg';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <>
            <Container id='aboutus'>
                <Row>
                    <Col md={6}>
                        {/* Left side content */}
                        <div className="about-us-container">
                            <h2 className="about-us-heading">ABOUT US</h2>
                        </div>

                    </Col>
                    <Col md={6}>
                        {/* Left side content */}
                        <div className="text-container">
                            <p className="wel-text">welcome to world of power and inclusitively</p>
                            <p className="text-inf">"Welcome to our community-driven platform, where we bridge communication gaps through the
                                power of sign language, fostering inclusivity and understanding."</p>
                            <p className="urdu-text">
                                ہمارا عزم ہے کہ
                                کی <span style={{ color: 'green' }}> پاکستان</span>
                                <br />
                                ترقی میں نمایاں کردار ادا کرنا
                            </p>

                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={12}>
                        {/* Additional text at the bottom */}
                        <p className="bottom-text">
                            Join us on the extraordinary journey. Together we are redefining the future of communication.
                        </p>
                    </Col>
                </Row>
                <Col md={6} className='image-boundry'>
                    {/* Image at the bottom */}
                    <img
                        src={flagman}
                        alt="About Us"
                        className="img-fluid flag-image"
                    />
                </Col>


            </Container >
        </>
    );
};

export default AboutUs;
