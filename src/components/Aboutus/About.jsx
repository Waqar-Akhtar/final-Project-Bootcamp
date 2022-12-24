import React from "react";
import logo from "../../image/logo.png"
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
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src={logo}
                  className="img-fluid border-radius p-4"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Mehtab Khan</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iure autem recusandae, veniam, illo dolor soluta assumenda
                  minima quia velit officia sit exercitationem nam ipsa,
                  repellendus aut facilis quasi voluptas!
                </p>
                <a href="/" className="text-secondary text-decoration-none">
                  Profile
                </a>
                <p className="text-black-50">UI Expert</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div
              id="carouselExampleControls"
              className="carouselslide "
              data-ride="carousel"
            >
              <div className="carousel-inner text-center">
                <div className="carousel-item active">
                  <div className="card mr-2 d-inline-block shadow">
                    <div className="card-img-top">
                      <img
                        src={logo}
                        className="img-fluid rounded-circle w-50 p-4"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Waqar Akhtar</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iure autem recusandae, veniam, illo dolor soluta
                        assumenda minima quia velit officia sit exercitationem
                        nam ipsa, repellendus aut facilis quasi voluptas!
                      </p>
                      <a
                        href="/"
                        className="text-secondary text-decoration-none"
                      >
                        Profile
                      </a>
                      <p className="text-black-50">Full Stack Developer</p>
                    </div>  
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card  d-inline-block mr-2 shadow">
                    <div className="card-img-top">
                      <img
                       src={logo}
                        className="img-fluid rounded-circle w-50 p-4"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Waqar Akhtar</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iure autem recusandae, veniam, illo dolor soluta
                        assumenda minima quia velit officia sit exercitationem
                        nam ipsa, repellendus aut facilis quasi voluptas!
                      </p>
                      <a
                        href="/"
                        className="text-secondary text-decoration-none "
                      >
                        Profile
                      </a>
                      <p className="text-black-50">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img
                  src={logo}
                  className="img-fluid border-radius p-4"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Uzair Khan</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iure autem recusandae, veniam, illo dolor soluta assumenda
                  minima quia velit officia sit exercitationem nam ipsa,
                  repellendus aut facilis quasi voluptas!
                </p>
                <a href="/" className="text-secondary text-decoration-none">
                  Profile
                </a>
                <p className="text-black-50">Front End Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
