import React from 'react'
import {
    Link, useNavigate
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Navbar() {
    let navigat = useNavigate()
    let location = useLocation();
    const logout = () => {
        localStorage.removeItem('token')
        navigat("/login")
    }
    useEffect(() => {
    }, [location]);
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="d-flex">
                    <Link className="navbar-brand container" to="/">INotebook</Link>
                    <ul  className="nav d-flex px-0">
                        <li className="nav-item">
                            <Link className={`nav-link py-auto ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <div className='d-flex'>
                        <Link className="btn btn-primary m-1 btn-sm" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary m-1 btn-sm" to="/signup" role="button">Signup</Link>
                    </div> : <button className="btn btn-primary m-1 btn-sm" onClick={logout} role="button">Logout</button>}
                </div>
            </nav>


        </>
    )
}
export default Navbar