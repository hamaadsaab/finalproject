import { Link } from 'react-router-dom';
import logo from '../logo/logo.jpg';
import handImage from '../images/hands.jpeg'; // Import the hand.jpg image
import './ForgetPassword.css'



// Login.js

// ... (existing code)

const ForgetPassword = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className='back-btn'>
                        <Link to="/landingpage" className="btn btn-link">
                            <button>GO BACK</button>
                        </Link>

                    </div>
                    <div className="d-flex flex-column align-items-start logo-container">
                        <img
                            src={logo}
                            className="d-inline-block align-top logo mb-3"
                            alt="Logo"
                        />
                        <img
                            src={handImage}
                            className="d-inline-block align-top hand-image"
                            alt="Hand"
                        />
                    </div>
                </div>

                <div className="col-md-6 login-container">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className="card-title">Forgot your password?</h3>

                            <form>
                                <div className="">
                                    <label htmlFor="email" className="form-label text-start">
                                        <p>Search your email</p>
                                    </label>
                                    <input type="email" className="form-control" id="email" placeholder='Enter your email' />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">
                                    Find Email!
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ForgetPassword;