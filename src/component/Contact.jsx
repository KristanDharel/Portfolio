import React from "react";
import "./contact.css";
import { Navigate, useNavigate } from "react-router-dom";
const Contact = () => {
  const navigation = useNavigate();
  return (
    <div className="contactMe">
      <h1 className="contact_heading">Connect With Me</h1>
      <p>Hi this is me Kristan once again</p>
      <p>Thank you for visiting my Portfolio website</p>
      <p>
        If you like my work you can connect with me in various social media
        platforms
      </p>
      <p>Connect with me:</p>
      <div className="contact_section">
        <div className="sec1" style={{ height: "30em", width: "15em" }}>
          <div className="img1">
            <img src="github.svg" alt="" />
            <br></br>
            Connect with me on Github
            <button
              onClick={() => {
                navigation("");
              }}
            >
              Connect
            </button>
          </div>{" "}
        </div>
        <div className="sec2" style={{ height: "30em", width: "15em" }}>
          <div className="img2">
            {/* <img src="github.svg" alt="" /> */}
            Connect with me on Github
            <button
              onClick={() => {
                navigation("");
              }}
            >
              Connect
            </button>
          </div>{" "}
        </div>
        <div className="sec3" style={{ height: "30em", width: "15em" }}>
          <div className="img3">
            {/* <img src="github.svg" alt="" /> */}
            Connect with me on Github
            <button
              onClick={() => {
                navigation("");
              }}
            >
              Connect
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
