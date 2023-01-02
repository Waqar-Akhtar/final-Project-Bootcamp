import React from "react";
import logo from "../../image/logo.png"
import profile from "../../image/profile.jpg"
import uzair from "../../image/uzair.jpeg"
import mehtab from "../../image/mehtab.jpeg"

import './aboutus.css'
const About = () => {
  return (
    <>
      <section className="section-4" id="aboutus">
        <div className="container text-center">
          <h1 className="text-white"> About Us</h1>
        </div>
        <div className="team row ">
          <div className="col-md-4 col-12 text-center">
            <div className="card  card1 mr-2 d-inline-block shadow-lg">
              <div className="card-img-top  ">
                <img
                  src={mehtab}
                  className="img-fluid border-radius p-4 cutome-img-aboutus"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mehtab Khan</h3>
                <p className="card-text">
                MERN Stack Developer with experience in HTML, CSS, JavaScript, 
                React, Nodes, MongoDB and Express.
                </p>
                <p className="text-black-50">MERN Stack Developer</p>
                <a href="https://www.linkedin.com/in/mehtab-khan-795b6a18b" target= "_blank"  className="text-secondary text-decoration-none">
                <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center custome-card-size">
            <div className="card card1 mr-2 d-inline-block shadow-lg">
              <div className="card-img-top ">
                <img
                  src={profile}
                  className="img-fluid border-radius p-4 cutome-img-aboutus"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Waqar Akhtar</h3>
                <p className="card-text">
                  MERN STACK Developer with experience in mutiple languages such as, HTML
                  , CSS, JavaScript, React JS, Mongo DB, and Express JS 
                </p>
                <p className="text-black-50">Full Stack Developer</p>
                <a href="https://www.linkedin.com/in/engr-waqar-akhtar"  target= "_blank" className="text-secondary text-decoration-none">
                <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <div className="card card1 mr-2 d-inline-block shadow-lg">
              <div className="card-img-top cutome-img-aboutus" >
                <img
                  src={uzair}
                  className="img-fluid border-radius p-4 cutome-img-aboutus"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Uzair Ullah</h3>
                <p className="card-text">
                MERN Stack Developer with experience in HTML, CSS, 
                JavaScript, React, Nodes, MongoDB and Express.
                </p>
                <p className="text-black-50">MERN Stack Developer</p>
                <a href="https://www.linkedin.com/in/uzair-ullah-762273159" target= "_blank"  className="text-secondary text-decoration-none">
                <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
