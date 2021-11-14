import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from './draft-logo.png'

function Navbar() {
    const [navHidden, setHidden] = useState(true)

    function toggleNav() {
        setHidden(!navHidden)
    }

    return (
        <div className="navbar">
            <Link to="/">
                <div className="brand">
                    <img src={logo} alt="logo"></img>
                    <div className="title">SSG</div>
                </div>
            </Link>
            <nav className={navHidden ? "hidden" : ""}>
                <ul>
                    <li onClick={toggleNav}><Link to="/">Home</Link></li>
                    <li onClick={toggleNav}><Link to="/about">Our Team</Link></li>
                    <li onClick={toggleNav}><Link to="/mission">Mission</Link></li>
                    <li onClick={toggleNav}><Link to="/contactus">Contact Us</Link></li>
                    <li onClick={toggleNav}><Link to="/news">News</Link></li>
                    <li onClick={toggleNav}><Link to="/donations">Donations</Link></li>
                </ul>
            </nav>
            <div className="burger" onClick={toggleNav}>
                <i className={navHidden ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
        </div>
    )
}

export default Navbar
