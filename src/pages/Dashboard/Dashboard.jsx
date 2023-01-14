import React, { useEffect, useState } from 'react'
import Addactivities from '../../components/AddActivities/Addactivities'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Sidebar from '../../components/Sidebar/Sidebar'
import './dashboard.css'
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [activitiesdata, setActivityData] = useState([ ])
  const myState = useSelector((store)=> store.dataReducer.data)
  const [show, setShow] = useState(false)
  const activitiesData = async ()=>{
    const res = await fetch('/activities/get',{
        headers: {
          authorization: `Bearer ${myState.token}`
      },
    })
    const data = await res.json()
    setActivityData(data.activities)
    
  }

  useEffect(()=>{
    activitiesData()
  },[activitiesdata])


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
          {activitiesdata.map((element, index)=>{
              return(
                     <Card key = {index} data = {element} />
               )
            })
          }

          </div>
        </div>
      </div>
    
       {show && <Addactivities tokenAuthorization ={myState.token} onclick={addactivitiesForm}/>}
      
    </>
  )
}

export default Dashboard
