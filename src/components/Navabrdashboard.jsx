import React from 'react'
import logo from '../image/logo.png'
import profile from '../image/profile.jpg'

const Navabrdashboard = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg position: sticky navbar-dark bg-dark">
        <div className="container-fluid mx-5 ">
          <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo" />
          </a>  
        
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
             <img className='profile' src={profile} alt="" />
             
            </div>
          
        </div>
      </nav>
    </>
  )
}

export default Navabrdashboard
