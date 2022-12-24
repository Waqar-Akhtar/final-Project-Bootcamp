import React from 'react'
import SignUp from './components/SignUp'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import LogIn from './components/LogIn';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <>
    <Router>
          <Navbar/>
            <Routes>
                <Route exact path = "/" element ={<Home/>} /> 
                <Route exact path = "/signup" element ={<SignUp/>} /> 
                <Route exact path = "/login" element ={<LogIn/>} />  
                 {/* <Route exact path = "/dashboard" element ={<Dashboard/>} /> */}
            </Routes>
      
        
    </Router>
    </>
  )
}

export default App







