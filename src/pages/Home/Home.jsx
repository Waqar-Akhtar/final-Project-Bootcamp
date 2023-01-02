import React from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/Aboutus/About'
import Footer from '../../components/Footer/Footer'

import './home.css'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  return (
    <>
    <div className="homebackground">
      <Navbar/>
      <Header/>
       <About/>
      <Footer/>  
    </div>
    </>
  )
}

export default Home
