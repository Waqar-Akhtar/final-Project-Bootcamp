import React from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/Aboutus/About'
import Footer from '../../components/Footer/Footer'
import './home.css'
const Home = () => {
  return (
    <>
    <div className="homebackground">
      <Header/>
       <About/>
      <Footer/>  
    </div>
    </>
  )
}

export default Home
