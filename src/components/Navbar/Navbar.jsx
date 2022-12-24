import React from "react";
import logo from '../../image/logo.png';
import './navbar.css'
import {
    Link
    } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg position: sticky navbar-dark bg-dark">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link  text" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link  text" aria-current="page" href="#aboutus">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text" to="/signup">
                  SIGN UP
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text" to="/login">
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
