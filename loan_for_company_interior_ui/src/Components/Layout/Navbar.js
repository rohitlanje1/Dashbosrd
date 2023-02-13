

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <>
        <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
            <div className="container col-2">
            <NavLink className="navbar-brand " to="#">
            <img src="#" alt="Logo" width="65" height="40" className="d-inline-block align-text-top"/></NavLink>LoanWeb</div>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link col-1" to="#">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/user">Apply Now</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link col-2" to="/emi">EMI</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/emi">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/login">Login/Signup</NavLink>
                    </li>
                    <li className="nav-item ">
                    <NavLink className="nav-link " to="/logout">Logout</NavLink>
                    </li>
                    
                    <li className="nav-item">
                    <NavLink className="nav-link " to="/logout">Name Of User</NavLink>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className="nav-link " to="/dashboard">DASHBOARD</NavLink>
                    </li> */}
                    
                </ul>
                </div>
        </div>
        </nav>
    
    </>
  )
}

export default Navbar
