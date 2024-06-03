// src/components/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo/logo.jpg';
import './Navbar.css';


const CustomNavbar = () => {
    const [isMenuClicked, setMenuClicked] = useState(false);
    const handleMenuClick = () => {
        setMenuClicked(!isMenuClicked);
    };

    return (
        <Navbar bg="red" expand="lg" variant="dark" className="navbar-dark">
            <Navbar.Brand >
                <img
                    src={logo}
                    className="d-inline-block align-top logo"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle className='menu' aria-controls="basic-navbar-nav" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`mr-auto ${isMenuClicked ? 'show' : ''}`}>
                    <a href="#landingpage" style={{ fontSize: '20px' }} className='nav-lnk'>HOME</a>
                    <a href="#aboutus" style={{ fontSize: '20px' }} className='nav-lnk'>ABOUT US</a>
                    <a href="#feedback" style={{ fontSize: '20px' }} className='nav-lnk'>FEEDBACK</a>
                    <a href="#Institute" style={{ fontSize: '20px' }} className='nav-lnk'>INSTITUTES</a>
                </Nav>
                <Form inline className={`searchbar ml-auto ${isMenuClicked ? 'show' : ''}`}>
                    {/* <div className="position-relative">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 searchInput" />
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    </div> */}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
