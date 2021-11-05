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
        <header className="navbar">
            <Link to="/">
                <div className="brand">
                    <img src={logo} alt="logo"></img>
                    <div className="title">SSG</div>
                </div>
            </Link>
            <nav className={navHidden ? "hidden" : ""}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Our Team</Link></li>
                    <li><Link to="/mission">Mission</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/donations">Donations</Link></li>
                </ul>
            </nav>
            <div className="burger" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Navbar
