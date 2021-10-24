import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from './draft-logo.png'

function Navbar() {
    return (
        <header className="navbar">
            <div className="brand">
                <img src={logo} alt="logo"></img>
                <div className="title">SSI</div>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/aboutBoardMembers">Our Team</Link>
                <Link to="/">Mission</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">News</Link>
                <Link to="/">Donations</Link>
            </nav>
        </header>
    )
}

export default Navbar
