// contactForm.jsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./contactForm.css";
import weblogo from "../logo/logo.jpg";
import hands from "../images/hands.jpeg"; // Import the image

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value || "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic to save the form data or perform other actions
  };

  return (
    <>
      <div className="Header">
        <Link to='/landingpage'> <img
          src={weblogo}
          className="d-inline-block align-top weblogo-add"
          alt="Logo"
        /></Link>
      </div >
      <div className="rectangle">
        <div className="contact-form">
          <h2>Add Contact</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-name"
              />
            </div>
            <div>
              <label>Phone:</label>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
            {/* Other form fields */}
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      {/* Add the image on the right side */}
      <div className="image-container-hands">
        <img src={hands} className="hands" alt="user" />
      </div>
    </>
  );
};

export default ContactForm;
