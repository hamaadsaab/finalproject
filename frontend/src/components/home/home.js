// src/components/Home.js

import React from 'react';
import CustomNavbar from '../navbar/Navbar';
import AboutUs from '../about_us/AboutUs';
import Feedback from '../feedback/Feedback';
import Institute from '../Institutes/Institute';
import Mainhome from '../mainhome/MainHome';
import './home.css'
import Footer from '../info/Footer'
    ;

const Home = () => {


    return (
        <>
            <CustomNavbar />
            <Mainhome />
            <AboutUs />
            <Feedback />
            <Institute />
            <Footer />
        </>
    );
};

export default Home;
