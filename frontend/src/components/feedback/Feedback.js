import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import flag from '../images/flag.jpg';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
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
        return stars;
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3002/api/feedback/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, feedback, rating })
            });

            if (response.ok) {
                console.log('Feedback submitted successfully!');
                alert('Feedback submitted successfully!');
                // Clear the form fields
                setName('');
                setEmail('');
                setFeedback('');
                setRating(0);
                localStorage.removeItem('userRating');
            } else {
                const errorData = await response.json();
                console.log('Error submitting feedback:', errorData.message);
                alert('Error submitting feedback: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting feedback: ' + error.message);
        }
    };

    const handleChatbotClick = () => {
        window.location.href = 'http://localhost:3001';
    };

    return (
        <div id="feedback">
            <div className="feedback-container">
                <div className="feedback-box p-4 border">
                    <h2 className="mb-3">Feedback</h2>
                    <p>Give us your feedback below:</p>

                    <div className="mb-1 row">
                        <div className="col-md-6 mb-1">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='enter your name'
                                className="form-control feedbk"
                                value={name}
                                style={{ backgroundColor: 'black', color: 'white' }}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6 mb-1">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control feedbk"
                                placeholder='enter your email'
                                value={email}
                                style={{ backgroundColor: 'black', color: 'white' }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="feedback" className="form-label">Feedback:</label>
                        <textarea
                            id="feedback"
                            className="form-control feedbk"
                            placeholder='Type here...'
                            value={feedback}
                            style={{ backgroundColor: 'black', color: 'white' }}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                    </div>

                    <div className="mb-1">
                        <p className="d-flex align-items-center">
                            <span className="me-2">Rate our website:</span>
                            {renderStars()}
                        </p>
                    </div>

                    <button className="btn btn-primary feedback-submit" onClick={handleSubmit} style={{ backgroundColor: 'red' }}>Submit</button>
                </div>
            </div>

            <div className='flag-img'>
                <img src={flag} alt="Chatbot" className="chatbot-image" />

                {/* Chatbot button with text */}
                <div className="chatbot-button-container">
                    <button className="btn-chatbot button-chatbot" onClick={handleChatbotClick}>Chatbot</button>
                </div>
            </div>
            <p className='chatbot-text'> If you have any query ,You can chat with us!</p>
        </div>
    );
};

export default Feedback;
