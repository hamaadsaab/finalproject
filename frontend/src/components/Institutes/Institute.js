
import React, { useState, useEffect } from 'react';
import './Institute.css';
import institute1 from '../images/institute1.jpg';
import institute2 from '../images/institute2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Institute = () => {
    const [rating, setRating] = useState(0);

    // Load user's previous rating from local storage on component mount
    useEffect(() => {
        const storedRating = localStorage.getItem('userRating');
        if (storedRating) {
            setRating(parseInt(storedRating, 10));
        }
    }, []);

    // Save user's rating to local storage when rating changes
    useEffect(() => {
        localStorage.setItem('userRating', rating.toString());
    }, [rating]);

    const handleStarClick = (value) => {
        setRating(value);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`star ${i <= rating ? 'yellow' : ''}`}
                    onClick={() => handleStarClick(i)}
                />
            );
        }
        return (
            <div className="stars-container">
                {/* <div className="numeric-rating">{rating}</div> */}
                <div className="stars">{rating}      {stars}</div>


            </div>
        );
    };
    return (
        <>
            <div className="container-institute">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="font-weight-bold">Famous Institute for Hearing-Impaired Individuals in Pakistan</h1>
                        {/* Add more content here if needed */}
                        {/* You can add more text, buttons, etc. */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27217.216180752166!2d74.26728806192003!3d31.492504945318103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903be2eeaf169%3A0x9d3548b82ef43c37!2sQuaid-i-Azam%20Campus%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715179093144!5m2!1sen!2s"
                                width="600px"
                                height="400px"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* Add your Google Map API implementation here */}
                            {/* For example: <iframe src="your-google-map-url" width="100%" height="100%" title="Google Map"></iframe> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-container">
                            <div className="image-box">
                                <div className="foundation"><h >Hamza  foundation academy  {<br />}for the deaf</h></div>

                                <img src={institute1} alt="Institute 1" className="box-image" />
                                {renderStars()}

                                <p className='location'> School in Lahore</p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                <p className='kilo-meter'>12.5KM</p>

                            </div>
                            <div className="image-box">
                                <div className="foundation"><h >Hamza  foundation academy{<br />} for the deaf</h></div>

                                <img src={institute2} alt="Institute 1" className="box-image" />
                                {renderStars()}

                                <p className='location'> School in Lahore</p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />

                                <p className='kilo-meter'>12.5KM</p>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Institute;
