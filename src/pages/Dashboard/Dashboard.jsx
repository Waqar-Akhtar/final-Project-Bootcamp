import React, { useState } from 'react'
import Addactivities from '../../components/AddActivities/Addactivities'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Sidebar from '../../components/Sidebar/Sidebar'
import './dashboard.css'
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const myState = useSelector((store)=> store.dataReducer.data)
  
  const [show, setShow] = useState(false)
  const addactivitiesForm = ()=>{
    setShow(!show)
  }
  return (
    <>
    
      <Sidebar username = {myState.user.name}/>
      <div className='dashboardBackground'>
        <div className=" dashboardContainer">
          <Button onclick = {addactivitiesForm}/>
          <div className="cardrow">
          debugger;
          <Card tokenAuthorization ={myState.token}/>
          <Card/>
         

          </div>
        </div>
      </div>
    
       {show && <Addactivities onclick={addactivitiesForm}/>}
      
    </>
  )
}

export default Dashboard
