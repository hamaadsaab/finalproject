import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAddressBook,
  faCog,
  faPen,
  faKey,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./account.css";
import weblogo from "../logo/logo.jpg";
import user_image from "../images/user_image.jpg";

const Account = () => {

  return (
    <>
      <div className="account_Header">
        <img
          src={weblogo}
          className="d-inline-block align-top weblogo"
          alt="Logo"
        />
      </div>

      <div className="user-info-container">
        {/* Image */}
        <div className="user-image-container-account">
          <img src={user_image} className="user-image " alt="user" />
          <p>WELCOME, HAMAAD!</p>
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

        <Link
          to="/accounts"
          className="nav-link "
          activeClassName="active-link"
        >
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

      {/* Account Text */}
      <div className="account-text">
        <p>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "12px" }} /> Account{" "}
        </p>
        <hr className="line" />
      </div>

      {/* User Details */}
      <div className="user-details">
        <div className="user-info">
          <img src={user_image} className="user-detail-image" alt="user" />
          <p className="user-name">Hamaad</p>
        </div>
        <div className="edit-icon">
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>

      {/* General Text */}
      <div className="general-text">
        <p>General</p>
        <hr className="line-2" />
      </div>

      {/* Name and Email Fields */}
      <div className="general-info">
        <div className="field">
          <label htmlFor="name">Name</label>
          <div className="field-value">
            <p>
              Hamaad
              <FontAwesomeIcon icon={faPen} style={{ marginLeft: "200px" }} />
            </p>
          </div>
          <label htmlFor="name">Email</label>
          <div className="field-value">
            <p>
              Hamaad
              <FontAwesomeIcon icon={faPen} style={{ marginLeft: "200px" }} />
            </p>
          </div>
        </div>
        {/* <div className="field">
          <label htmlFor="email">Email</label>
          <div className="field-value">
            <p>
              hamaadsaab@gmail.com
              <FontAwesomeIcon icon={faPen} style={{ marginLeft: "65px" }} />
            </p>
          </div>
        </div> */}
      </div>

      {/* Access Text */}
      <div className="access-text">
        <p>Access</p>
        {/* <hr className="line-3" /> */}
      </div>

      {/* Change Password Field */}
      <div className="change-password">
        <div className="button-field">
          <Link to="/resetpassword"> <button className="change-password-btn">
            <FontAwesomeIcon icon={faKey} style={{ marginRight: "30px", marginLeft: "-55px" }} />
            Change Your Password
          </button>
          </Link>
        </div>
      </div>

      {/* Delete Account Field */}
      <div className="delete-accounts">

        <div className="button-field">
          <Link to="/logout">
            <button className="delete-accounts-btn">
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ marginRight: "30px", marginLeft: "-100px" }}
              />
              Delete Account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Account;
