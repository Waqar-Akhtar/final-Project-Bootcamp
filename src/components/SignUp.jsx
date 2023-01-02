import React from "react";
import { useState } from "react";
import { RiContactsFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdPassword } from 'react-icons/md';
import { CgMail } from 'react-icons/cg';
import running from '../image/running.png'


import {
  Link, useNavigate
} from "react-router-dom"
import Navbar from './Navbar/Navbar';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [cPassword, setCpassword] = useState()
    const navigator = useNavigate()

    const Registration= async ()=>{
      const res= await fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name , email , Password, cPassword
        })
       
      } );
      const data = await res.json(); 

          if(res.status ===500){
            window.alert("Internal Server error")
          }else if(res.status === 403){
            window.alert("Email Already In-Use")
          } else if(res.status === 410){
            window.alert("password and confirm password are not same")
          }else {
        window.alert('Register Successfully')
        navigator('/login')
      }
    }
    
  return (
    <>
    <Navbar/>
      <section className="vh-100 "  style={{backgroundColor: "#151515"}}>
        <div className="container h-100 d-flex justify-content-center align-items-center" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-white"  style={{borderRadius: "25px",backgroundColor: "#363636", height: "90vh"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign Up
                      </p>

                      <form method="POST" className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i style={{fontSize: "25px"}} className=" mt-3 me-3 "><RiContactsFill /></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={(e)=>setName(e.target.value)}
                              value = {name}
                              placeholder = "Waqar Akhtar"
                              required
                            />
                           
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i style={{fontSize: "25px"}} className=" mt-3 me-3 "><CgMail /></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e)=>setEmail(e.target.value)}
                              value = {email}
                              placeholder = "abc@gmail.com"
                              required
                            />
                           
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i style={{fontSize: "25px"}} className=" mt-3 me-3 "><RiLockPasswordFill /></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={(e)=>setPassword(e.target.value)}
                              value = {Password}
                              placeholder = "***********"
                              required
                            />
                         
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i style={{fontSize: "25px"}} className=" mt-3 me-3 "><MdPassword /></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              onChange={(e)=>setCpassword(e.target.value)}
                              value={cPassword}
                              placeholder = "***********"
                              required
                            />
                            
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                         
                          <label className="form-check-label" htmlFor="form2Example3">
                            Already have an Account ?{" "}
                            <Link style={{ textDecoration: "none" }} to="/login">Log In</Link>
                          </label>
                        </div>

                        <div className="d-flex align-item-center justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={Registration} type="button" className="btn btn-lg w-100 mx-3 btn-success">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="  col-md-9 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 ">
                      <img  className="img-fluid "  alt="img"  src={running}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
