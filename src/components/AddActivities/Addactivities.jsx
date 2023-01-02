import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./addactivities.css";

const Addactivities = (props) => {
  const myState = useSelector((store)=> store.dataReducer.data)
    const [duration, setDuration] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [activity, setActivity] = useState("")


    const AddActivity= async ()=>{
      console.log(props.tokenAuthorization)
      // const res = await fetch('/activities/create',{
      //   method: "POST",
      //   headers: {
      //     // Accept: 'application/json',
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${props.tokenAuthorization}`
      //   },
      //   body: JSON.stringify({
      //     duration,
      //     description,
      //     date,
      //     activity
      //   })
        
      // })
      // const data = await res.json()
      // console.log(data)
    }
  return (
    <>
      <div className="activities-container">
        <div className="activities-sub-container">
          <div className="activities-container2">
            <div className="crossbtn">
              <li
                onClick={props.onclick}
                className="fa-solid fa-xmark bg-success px-2"
              ></li>
            </div>
            <div className="text">Add Activities</div>
            <form >
              <div className="form-row">
                <div className="input-data">
                  <select id="activities" onChange={(e)=>{
                    const activities1 = e.target.value;
                    setActivity(activities1)
                  }}>
                    {/* <option value="" disabled selected hidden>
                      Activities
                    </option> */}
                    <option value="Run">Run</option>
                    <option value="Bicycle Ride">Bicycle Ride</option>
                    <option value="Swim" selected>
                      Swim
                    </option>
                    <option value="Walk" selected>
                      Walk
                    </option>
                    <option value="Hike " selected>
                      Hike
                    </option>
                  </select>
                  <div className="underline"></div>
                </div>
                <div className="input-data">
                  <input type="date" value={date} onChange = {(e)=>setDate(e.target.value)} required />
                  <div className="underline"></div>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data duration">
                  <input type="text" required value={duration} onChange = {(e)=>setDuration(e.target.value)} />
                  <div className="underline"></div>
                  <label for="">Duration</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <textarea rows="8" cols="80" required value={description} onChange = {(e)=>setDescription(e.target.value)} ></textarea>
                  <br />
                  <div className="underline"></div>
                  <label for="">Description</label>
                  <br />
                  <div className="form-row submit-btn">
                    <div className="add-button">
                      <button className="btn btn-success w-100" onClick={()=>AddActivity()}>ADD</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addactivities;
