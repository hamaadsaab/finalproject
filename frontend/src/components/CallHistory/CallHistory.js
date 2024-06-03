import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faAddressBook,
  faCog,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import "./callHistory.css";
import weblogo from "../logo/logo.jpg";
import user_image from "../images/user_image.jpg";
import dummyData from "./DummyData";
import user from "../images/user.jpeg"

const CallHistory = () => {
  const [callLogs, setCallLogs] = useState(dummyData);

  // Function to clear call logs
  const clearCallLogs = () => {
    setCallLogs([]);
  };

  return (
    <div className="wholescreen">
      <div className="Header">
        <img
          src={weblogo}
          className="d-inline-block align-top weblogo-callhistory"
          alt="Logo"
        />
      </div>

      <div className="user-info-container-callhistory">
        {/* Image */}
        <div className="user-image-container-callhistory">
          <img src={user_image} className="user-image " alt="user" />
          <p>WELCOME,HAMAAD!</p>
        </div>
      </div>

      {/* Navigation links with icons */}
      <div className="nav-links">
        <Link
          to="/"
          className="nav-link link-under"
          activeClassName="active-link"
          exact
        >
          <span className="linkto-home">
            <FontAwesomeIcon icon={faHome} /> Home Feed
          </span>
        </Link>

        <Link to="/account" className="nav-link " activeClassName="active-link">
          <span className="under-links">
            <FontAwesomeIcon icon={faUser} /> Account
          </span>{" "}
          <hr className="horizontal" />
        </Link>

        <Link
          to="/contacts"
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
          <p className="call_history"><FontAwesomeIcon icon={faHistory} style={{ marginRight: "10px" }} />  CALL HISTORY</p>
          <button className="new_call_btn">MAKE NEW CALL</button>
        </div>
        {/* Clear Call Log Button */}
        <button className="clear_call_log_btn" onClick={clearCallLogs}>
          Clear Call Log
        </button>
        <hr className="line"></hr>
        {/* Display Call Logs */}
        <div className="call_logs">
          {callLogs.map((log, index) => (
            <div key={index} className="call_log_item">
              <img src={user} alt={log.name} />
              <p className="name"> {log.name}</p>
              <div className="date"> {log.dateTime}</div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};


export default CallHistory;