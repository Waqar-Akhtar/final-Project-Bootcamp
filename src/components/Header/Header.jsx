import React from "react";
import Lottie from "lottie-react";
import running from "../../image/running.json";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header-home" id="header-home">
        <div className="container text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-sm-12  text-white">
              <h1>Excercise Tracker</h1>
              <p>
                Excersice Tracker offers easy ways to enter data, create
                routines, log workouts, and visualize your progress. It comes
                with all the tools you'll need to track activities effectively,
                including an extensive library of exercises and a practical way
                to enter data Adding sets and exercises is fast, as is removing
                or re-arranging them. The app fills in previous data and offers
                a complete history.
              </p>
              <Link className="btn btn-success px-5 py-2 primary-btn" to="/signup">
                Register Now
              </Link>
            </div>
            <div className="col-md-5 col-sm-12  h-25">
              <Lottie animationData={running} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
