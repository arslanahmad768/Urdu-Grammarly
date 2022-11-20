import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";

const Navbar = () => {
  var check = false;
  const [isactive, setIsActive] = useState(false);
  const authentication = Cookies.get("jwToken");
  if (authentication) {
    check = true;
    console.log("condition is :", check);
  }
  console.log("auth is :", authentication);
  const DeleteCokie = () => {
    Cookies.remove("jwToken", { path: "/", domain: "localhost" });
  };
  const onhandle = () => {
    setIsActive(true);
  };
  return (
    <div>
      <img
        src="/images/ur2.png"
        className="rounded mx-auto d-block"
        width="190"
        height="100"
        alt="Tag of ap"
      />
      <div className="container">
        <ul className="nav nav-tabs navbar-dark bg-dark">
          <li className="nav-item ">
            <Link
              className={isactive ? "nav-link bg-info 'bg-salmon'" : "nav-link"}
              style={{ color: "white" }}
              to="/"
              // activeClassName={navbarcss.active}
              tabIndex={-1}
              aria-disabled="true"
              onClick={onhandle}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/suggestion"
            >
              Word Suggestion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/correction"
              tabIndex={-1}
              aria-disabled="true"
            >
              Word Correction
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/grammar"
              onClick={onhandle}
              tabIndex={-1}
              aria-disabled="true"
            >
              Grammar Checking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: "white" }} to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ color: "white" }}
              to="/contact"
              tabIndex={-1}
              aria-disabled="true"
            >
              Contact Us
            </Link>
          </li>
          {check ? (
            <li className="nav-item ">
              <a
                className="nav-link"
                style={{ color: "white" }}
                href="/"
                tabIndex={-1}
                aria-disabled="true"
                onClick={DeleteCokie}
              >
                Logout
              </a>
            </li>
          ) : (
            <li className="nav-item bg-info">
              <Link
                className="nav-link "
                style={{ color: "white", backgroundColor: "green" }}
                to="/login"
                tabIndex={-1}
                aria-disabled="true"
              >
                Login
              </Link>
            </li>
          )}

          {!check ? (
            <li className="nav-item bg-info">
              <Link
                className="nav-link "
                style={{ color: "white" }}
                to="/signup"
                tabIndex={-1}
                aria-disabled="true"
              >
                Sign Up
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
