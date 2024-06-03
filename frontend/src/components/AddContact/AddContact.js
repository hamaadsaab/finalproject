import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAddressBook,
  faCog,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./addContact.css";
import weblogo from "../logo/logo.jpg";
import user_image from '../images/user_image.jpg';
import user from "../images/user.jpeg"
import dummyContacts from './dummyContacts';

const AddContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Set dummy contacts when the component mounts
    setContacts(dummyContacts);
  }, []);
  return (
    <>
      <div className="Header">
        <img
          src={weblogo}
          className="d-inline-block align-top weblogo-addcontact"
          alt="Logo"
        />
      </div>

      <div className="user-info-container">
        {/* Image */}
        <div className="user-image-container">
          <img src={user_image} className="user-image " alt="user" />
          <p>WELCOME,HAMAAD!</p>
        </div>
      </div>

      {/* Navigation links with icons */}
      <div className="nav-links">
        <Link
          to="/landingpage"
          className="nav-link link-under"
          activeClassName="active-link"
          exact
        >
          <span className="linkto-home">
            <FontAwesomeIcon icon={faHome} /> Home Feed
          </span>
        </Link>

        <Link to="/accounts" className="nav-link " activeClassName="active-link">
          <span className="under-links">
            <FontAwesomeIcon icon={faUser} /> Account
          </span>{" "}
          <hr className="horizontal" />
        </Link>

        <Link
          to="/addcontacts"
          className="nav-link home-link"
          activeClassName="active-link"
        >
          <span className="under-links">
            <FontAwesomeIcon icon={faAddressBook} /> Contacts{" "}
          </span>{" "}
          <hr className="horizontal" />
        </Link>

        <Link
          to="/settings"
          className="nav-link link-under settings-link"
          activeClassName="active-link"
        >
          <span className="under-links ">
            <FontAwesomeIcon icon={faCog} /> Settings{" "}
          </span>
        </Link>
      </div>
      <div className="rectangle1">
        <div className="rectangle_2">
          <h3 className="addContacts">SELECT CONTACT</h3>
          <span className="contactCount">16 Contacts</span>
          <Link to='/callhistory'><button className="call_history_btn">CHECK CALL HISTORY</button></Link>
        </div>
        <div className="addContactWrapper">
          <Link to="/contactform" className="addContactButton">
            <p><FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "10px" }} />  Add Contact</p>
          </Link>
        </div>
        <hr className="line"></hr>
        {/* Render dummy contacts */}
        <div className="contacts-container">
          {contacts.map((contact) => (
            <div className="contact" key={contact.id}>
              <img src={user} alt={contact.name} />
              <span>{contact.name}</span>
            </div>
          ))}
        </div>
      </div >
    </>
  );
};

export default AddContact;