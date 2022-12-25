import React from "react";
import './card.css'
import logo from "../../image/logo.png"
// import {Link} from 'react-router-dom'
const Card = () => {
  return (
    <>
      <div class="card" style={{width: "18rem"}}>
      <div className="editandtrash">
            <div className="timer">
                <i className='fas fa-edit card-icon'></i>
            </div>
            <div className="timer">
                <i className='fas fa-trash-alt card-icon'></i>
            </div>

          </div>
        <img src={logo} class="card-img-top" alt="activities" />
        <div class="card-body">
          <h5 class="card-title">Bi CycleRide</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="timeDate">
            <div className="timer">
                <i className='fas fa-clock card-icon'></i>
                <span className='card-name'>60m</span>
            </div>
            <div className="timer">
                <i className='fas fa-calendar-alt card-icon'></i>
                <span className='card-name'>12:12:12</span>
            </div>

          </div>
        
        </div>
      </div>
    </>
  );
};

export default Card;
