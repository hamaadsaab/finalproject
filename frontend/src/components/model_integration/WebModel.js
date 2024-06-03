import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUser, faAddressBook, faCog, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './WebModel.css';
import weblogo from '../logo/logo.jpg';
import user_image from '../images/user_image.jpg';
//import RunModel from '../tjsUtils/MLservice';

const WebModel = () => {
    const webcamRef = useRef(null);
    // const canvasRef = useRef(null);

    // useEffect(() => {
    //     RunModel(webcamRef, canvasRef);
    // }, []);


    const [isCameraOn, setIsCmeraOn] = useState(true);
    const [translatedWords, setTranslatedWords] = useState('');

    const toggleCamera = () => {
        setIsCmeraOn((prev) => !prev);
    };

    // const capture = async () => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     const translated = await RunModel(imageSrc);  
    //     setTranslatedWords(translated);
    // };

    const clearTranslation = () => {

        setTranslatedWords('');
    };




    return (
        <>
            <div className='model_Header'>

                <button className="logout-btn-model">
                    <FontAwesomeIcon icon={faSignOutAlt} />{'     '}  LOGOUT
                </button>

                <img
                    src={weblogo}
                    className="d-inline-block align-top model_logo"
                    alt="Logo"
                />
            </div >

            <div className="user-info-container-video">
                <div className="user-image-container-video">
                    <img
                        src={user_image}
                        className="user-image"
                        alt="user"
                    />
                    <p>WELCOME, HAMAAD!</p>
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
                    <span className="under-links"><FontAwesomeIcon icon={faCog} /> Settings </span>
                </Link>
            </div>

            {/* Video call and search buttons with icons */}
            <div className="model-container">
                <div className="row">
                    <div className="col-md-1">
                        <div className="inner_div first_div">
                            {/* Container for Webcam and Buttons */}
                            <div className="webcam-container">
                                {/* Webcam */}
                                {isCameraOn && (
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        screenshotFormat="image/jpeg"
                                        className="webcam"
                                    />
                                )}

                                {/* Buttons */}
                                <div className="buttons-container">
                                    <button className={`video-call-button ${isCameraOn ? 'on' : 'off'}`} onClick={toggleCamera}>
                                        {isCameraOn ? 'TURN OFF CAMERA ' : 'TURN ON CAMERA'}
                                    </button>
                                    <button className="capture-button" >

                                        {/* onClick={capture} */}
                                        CAPTURE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="translation-div">
                            < p className='text-trans'> Translation:</p>
                        </div>
                        <button className="clear-button" onClick={clearTranslation}>
                            CLEAR
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default WebModel;
