// WebcamContainer.js

import React, { useState, useEffect } from 'react';
import Logout from './Logout';

const LogoutState = () => {
    const [userData, setUserData] = useState({
        userName: 'Hamaad',
        userImage: '/path/to/default_image.jpg', // Provide a default image path
    });

    useEffect(() => {
        // Fetch user data from the backend and update state
        // Replace the following with your actual backend API call
        fetchUserDataFromBackend().then((data) => {
            setUserData(data);
        });
    }, []); // Empty dependency array to fetch data only once on component mount

    // Example function to simulate fetching user data from the backend
    const fetchUserDataFromBackend = async () => {
        // Replace this with your actual backend API call
        const response = await fetch('/api/user-data');
        const data = await response.json();
        return data;
    };

    return (
        <div className="container custom-container-web">
            <div className="row">
                <div className="col-md-12">
                    {/* Pass user data as props to the Webcams component */}
                    <Logout userData={userData} />
                </div>
            </div>
        </div>
    );
};

export default LogoutState;
