import React from 'react'
import './addactivities.css'
const Addactivities = (props) => {
  return (
    <>
      <div className="activities-container">
        <div className="activities-sub-container">
        <div class="activities-container2">
            <div className="crossbtn">
                <li onClick={props.onclick} className='fa-solid fa-xmark bg-success px-2'></li>

            </div>
        <div class="text">Add Activities</div>
        <form action="#">
           <div class="form-row">
              <div class="input-data">
                <select id="activities" >
                    <option value="" disabled selected hidden>Activities</option>
                    <option value="Run">Run</option>
                    <option value="Bicycle Ride">Bicycle Ride</option>
                    <option value="Swim" selected>Swim</option>
                    <option value="Walk" selected>Walk</option>
                    <option value="Hike " selected>Hike</option>
                 
                </select>
                 <div class="underline"></div>
                 {/* <label for="activities"></label> */}
              </div>
              <div class="input-data">
                 <input type="date" required/>
                 <div class="underline"></div>
                 {/* <label for="">Date</label> */}
              </div>
           </div>
           <div class="form-row">
              <div class="input-data duration">
                 <input type="text" required/>
                 <div class="underline"></div>
                 <label for="">Duration</label>
              </div>
           </div>
           <div class="form-row">
              <div class="input-data textarea">
                 <textarea rows="8" cols="80" required></textarea>
                 <br />
                 <div class="underline"></div>
                 <label for="">Description</label>
                 <br />
                 <div class="form-row submit-btn">
                    <div class="add-button">
                      <button className='btn btn-success w-100'>ADD</button>
                    </div>
                 </div>
              </div>
           </div>
        </form>
     </div>
         </div>
        </div>
    </>
  )
}

export default Addactivities
