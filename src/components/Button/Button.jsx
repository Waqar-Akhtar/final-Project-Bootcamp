import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <>
    <div className='btnActivities'>
     <button className='btn btn-success ' onClick={props.onclick}>Add Activities</button> 
    </div>
    </>
  )
}

export default Button
