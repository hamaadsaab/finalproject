// SplashScreen.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Splash.css'; // Link the CSS file
import Splash from '../images/splash.jpg'

const SplashScreen = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // Simulate a 3-second delay and then redirect to home
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    // Redirect to home after the splash screen is shown for 3 seconds
    if (redirect) {
        return <Navigate to="/landingpage" />;
    }

    return (
        <div className="splash-container">
            <img
                src={Splash} // Update the path to your splash screen image
                alt="Splash Screen"
                className="splash-image"
            />
        </div>
    );
};

export default SplashScreen;
