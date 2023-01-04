import React, { useState } from "react";
import Navbar from './Navbar/Navbar';
import {useDispatch } from "react-redux";
import {
  Link, useNavigate
} from "react-router-dom"
const LogIn = () => {

  const dispatch = useDispatch()
  const [email, setEmail]= useState("")
  const [Password, setPassword]= useState("")
  const navigator = useNavigate()
  const loginStatus = async ()=>{
    const res = await fetch('/user/login',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email, 
        Password
      })
    })
    const data = await res.json()
    if(res.status === 403){
      window.alert(data)
     
    }
     else if(res.status === 410){
      window.alert(data)
    }else{
      // console.log(data)
      dispatch({type: "datadetails", payload: data})
       navigator('/dashboard')
          //  console.log(myState.data)
    }

    }
  

  return (
    <>
    <Navbar/>
      <section className="vh-100  " style={{backgroundColor: "#151515"}}>
        
        <div className="container-fluid text-white d-flex flex-column justify-content-center align-items-center h-100" >
        {/* <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Log In </p> */}
          <div className="row d-flex justify-content-center align-items-center " style={{ backgroundColor: "#363636", padding: "40px 0", borderRadius: "10px"}}>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt ="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" >
              <form method="POST">
                <div className="form-outline mb-4">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Log In </p>
                <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    value={email}
                    placeholder="Enter a valid email address"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                 
                </div>

                <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    value={Password}
                    placeholder="Enter password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                 
                </div>



                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-success btn-lg"
                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                    onClick = {loginStatus}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="link-primary text-decoration-none ">
                      Register Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default LogIn;
