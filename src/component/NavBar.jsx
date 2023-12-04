import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { scroller } from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Kristan<span style={{ color: "orange" }}>.</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page"> */}
                <NavLink
                  className="nav-link active mx-lg-5"
                  to={"/"}
                  style={{ marginRight: "25vh" }}
                >
                  About Me
                </NavLink>
                {/* </a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page"> */}
                <NavLink
                  className="nav-link active mx-lg-5"
                  to={"/resume"}
                  style={{ marginRight: "25vh" }}
                >
                  Resume
                </NavLink>
                {/* </a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page"> */}
                <NavLink
                  className="nav-link active mx-lg-5"
                  to={"/contact"}
                  style={{ marginRight: "25vh" }}
                >
                  Contact
                </NavLink>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
