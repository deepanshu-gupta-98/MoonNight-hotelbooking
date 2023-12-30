import React from 'react'
import { BrowserRouter, Link, Route,Router } from "react-router-dom"
import "./navbar.css"
import Login from "./Account/Login"
import Register from "./Account/Register"

function Navbar() {

  return (
    <>


    <div className="navbar">
        <div className="navContainer">
          <a href="/" className="text-decoration-none text-light border border-light rounded p-2 ">Hotelbooking</a>
            {/* <img src="New folder\logo.png" alt=" " className="moon" /> */}
            <div className="navItems">
                <Link to="/Register"> <button className="navButton">Register</button></Link>
                <Link to="/Login"> <button className="navButton">Login</button></Link>
                
            </div>
        </div>
      
    </div> 
   
       
  
    </>
  )
}

export default Navbar
