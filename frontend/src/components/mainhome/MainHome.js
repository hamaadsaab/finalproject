import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/robot.png';
import './Home.css';
import { Link } from 'react-router-dom';

const MainHome = () => {

    const [isMenuClicked, setMenuClicked] = useState(false);
    const handleMenuClick = () => {
        setMenuClicked(!isMenuClicked);
    };

    const getImageSize = () => {
        return isMenuClicked ? { maxHeight: '150px' } : {};
    };
    return (
        <div>
            <div className={`container mt-3 custom-container ${isMenuClicked ? 'menu-clicked' : ''}`}>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h1 text-right>
                            <span className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span> <br />
                            <span className='welcome'>WELCOME TO</span>  <br />
                            <span className="red-text">BEYOND THE WORDS</span>
                        </h1>
                        <p className="white-text">Sign that connects, conservation that matters!</p>
                    </div>

                    <div className="col-md-6 text-right">
                        <div className="mt-3">
                            <Link to="/login">
                                <button className="btn btn-custom btn-login">LOGIN</button>
                            </Link>
                            <Link to="/signup" className="ml-auto">
                                <button className="btn btn-custom btn-signup">SIGN UP</button>
                            </Link>
                        </div>

                        <div className="mt-3">
                            <img
                                src={logo1}
                                alt="Beyond the Words"
                                className="img-fluid smaller-image mx-auto d-block"
                                style={getImageSize()}
                                onClick={handleMenuClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome