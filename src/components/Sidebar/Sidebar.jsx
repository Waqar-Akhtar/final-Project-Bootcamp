import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

import profile from '../../image/profile.jpg'
import logo from '../../image/logo.png'

const Sidebar = (props) => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`headersidebar ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        <div className="logoimg">
          <img src={logo} alt="" />
        </div>
        
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/dashboard' className={`${show ? 'nav-logoshow' : "nav-logo" } `}>
              <i className={`nav-link-icon`}> <img className='imglogo' src={profile} alt="" /> </i>
              { show && <span className='nav-logo-name'>{props.username}</span>}
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/activities' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Activities</span>
              </Link>
              
            </div>
          </div>

          <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;