import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAddressBook,
  faCog,
  faBell,
  faBan,
  faPlus,
  faInfo,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";
import "./settings.css";
import weblogo from "../logo/logo.jpg";
import user_image from "../images/user_image.jpg";
import blockedUsers from "./blockedUsers";

const Settings = () => {
  const [isDNDActive, setIsDNDActive] = useState(false);
  const [isNMCActive, setIsNMCActive] = useState(false);
  const [blockedUsers, setBlockedUsers] = useState([]);

  const handleDNDToggle = () => {
    setIsDNDActive(!isDNDActive);
  };

  const handleNMCToggle = () => {
    setIsNMCActive(!isNMCActive);
  };

  const unblockUser = (id) => {
    setBlockedUsers(blockedUsers.filter((user) => user.id !== id));
    // Here you would typically make a backend call to update the blocked list
    // You can pass `id` to your backend to perform the unblocking action
  };

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
        <div className="user-image-container">
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

      {/* settings Text */}
      <div className="settings-text">
        <p>
          <FontAwesomeIcon icon={faCog} style={{ marginRight: "12px" }} /> Settings{" "}
        </p>
        {/* <hr className="line" /> */}
      </div>
      {/* notification Text */}
      <div className="notification-text">
        <p>
          <FontAwesomeIcon icon={faBell} style={{ marginRight: "12px" }} /> Notifications
        </p>
        {/* <hr className="line-2" /> */}
      </div>

      {/* Do not disturb toggle */}
      <div className="dnd-toggle">
        <p>Do not disturb</p></div>
      <div className="Switch"><label className="switch">
        <input
          type="checkbox"
          checked={isDNDActive}
          onChange={handleDNDToggle}
        />
        <span className="slider round"></span>
      </label>
      </div>

      {/* notify missed calls toggle */}
      <div className="nmc-toggle">
        <p>Notify missed calls</p></div>
      <div className="Switch-2"><label className="switch-2">
        <input
          type="checkbox"
          checked={isNMCActive}
          onChange={handleNMCToggle}
        />
        <span className="slider-2 round-2"></span>
      </label>
      </div>
      {/* blocking Text */}
      <div className="blocking-text">
        <p>
          <FontAwesomeIcon icon={faBan} style={{ marginRight: "12px" }} /> Blocking
        </p>
        {/* <hr className="line-3" /> */}
      </div>
      {/* add to blocklist Text */}
      <div className="blocklist-text">
        <p>
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: "12px" }} /> Add to Blocked List
        </p>
        {/* <hr className="line-4" /> */}
      </div>
      {/* Blocked Users */}
      {blockedUsers.length > 0 ? (
        blockedUsers.map((user) => (
          <div key={user.id} className="blocked-user">
            <p>{user.name}</p>
            <button onClick={() => unblockUser(user.id)}>Unblock</button>
          </div>
        ))
      ) : (
        <p></p>
      )}
      {/* community Text */}
      <div className="community-text">
        <p>Community Standards and legal process</p>
        {/* <hr className="line-5" /> */}
      </div>
      {/* cookies policy */}
      <div className="cookies-policy">
        <Link to='/cookiespolicy' className="cookies-policy-btn">
          <FontAwesomeIcon
            icon={faCookie}
            style={{ marginRight: "30px", marginLeft: "-100px" }}
          />
          Cookies Policy
        </Link>
      </div>
      {/* about us */}
      <div className="about-us">
        <Link to='/aboutus' className="about-us-btn">
          <FontAwesomeIcon
            icon={faInfo}
            style={{ marginRight: "30px", marginLeft: "-100px" }}
          />
          About Us
        </Link>
      </div>
    </>
  );
};

export default Settings;
