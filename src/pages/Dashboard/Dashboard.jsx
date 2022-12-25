import React, { useState } from 'react'
import Addactivities from '../../components/AddActivities/Addactivities'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Sidebar from '../../components/Sidebar/Sidebar'
import './dashboard.css'

const Dashboard = () => {
  const [show, setShow] = useState(false)
  const addactivitiesForm = ()=>{
    setShow(!show)
  }
  return (
    <>
      <Sidebar/>
      <div className='dashboardBackground'>
        <div className=" dashboardContainer">
          <Button onclick = {addactivitiesForm}/>
          <div className="cardrow">
          <Card />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

          </div>
        </div>
      </div>
    
       {show && <Addactivities onclick={addactivitiesForm}/>}
      
    </>
  )
}

export default Dashboard
