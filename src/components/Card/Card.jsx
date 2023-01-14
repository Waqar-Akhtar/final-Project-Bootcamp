import React from "react";
import './card.css'
import logo from "../../image/logo.png"
import { useSelector } from "react-redux";

const Card = (props) => {
  const myState = useSelector((store)=> store.dataReducer.data)
  const deleteActivity= async ()=>{
        const res = await fetch(`/activities/delete/${props.data._id}`,{
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${myState.token}`
        }
      })
      const resdata = await res.json()
      console.log(resdata)
    }

    

  return (
    <>
      <div className="card text-center"  style={{width: "18rem", height: "20.2rem"}}>
      <div className="editandtrash">
            <div className="timer">
                <i className='fas fa-edit card-icon'></i>
            </div>
            <div className="timer">
                <i className='fas fa-trash-alt card-icon ' onClick={deleteActivity}></i>
            </div>

          </div>
        <img src={logo} className="card-img-top img-custome" alt="activities" />
        <div className="card-body">
          <h5 className="card-title">{props.data.activity} </h5>
          <p className="card-text">
            {props.data.description}
          </p>
          <div className="timeDate">
            <div className="timer">
                <i className='fas fa-clock card-icon'></i>
                <span className='card-name'>{props.data.duration}</span>
            </div>
            <div className="timer">
                <i className='fas fa-calendar-alt card-icon'></i>
                <span className='card-name'>{ props.data.date}</span>
            </div>

          </div>
        
        </div>
      </div>
    </>
  );
};

export default Card;
