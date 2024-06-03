// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/navbar/Navbar';
import Home from './components/home/home';  // Assuming the correct file path
import Login from './components/login/Login';  // Add the correct file path for your Login component
import ForgetPassword from './components/forget_password/ForgetPassword';  // Add the correct file path for your Login component
import ResetPassowrd from './components/reset-pwd/ResetPassword';
import Signup from './components/signup/Signup';
// import AboutUs from './components/about_us/AboutUs';
import Splash from './components/Splash/Splash';
// import Feedback from './components/feedback/Feedback';
// import Institute from './components/Institutes/Institute';
import Footer from './components/info/Footer';
// import Webcams from '../src/components/webcams/Webcams';
import WebContainer from '../src/components/webcams/WebcamContainer';
import WebModel from './components/model_integration/WebModel';
import TermsCondition from './components/Terms&conditions/TermsCondition';
import CookiePolicy from './components/Cookiespolicy/CookiePolicy';
import LogoutState from './components/logout/LogoutState';
import AddContact from './components/AddContact/AddContact';
import CallHistory from './components/CallHistory/CallHistory';
import ContactForm from './components/ContactForm/contactForm';
import Acount from './components/Account/account';
import Settings from './components/Settings/settings';




function App() {




  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Splash />} />
          <Route path="/navbar" element={<CustomNavbar />} />
          <Route path="/landingpage" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassowrd />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/footer" element={<Footer />} />
          {/* <Route path="/webcams" element={<Webcams />} /> */}
          <Route path="/webcams" element={<WebContainer />} />
          <Route path="/webmodel" element={<WebModel />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/cookiespolicy" element={<CookiePolicy />} />
          <Route path="/logout" element={<LogoutState />} />
          <Route path="/addcontacts" element={<AddContact />} />
          <Route path="/callhistory" element={<CallHistory />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/accounts" element={<Acount />} />
          <Route path="/settings" element={<Settings />} />


          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
