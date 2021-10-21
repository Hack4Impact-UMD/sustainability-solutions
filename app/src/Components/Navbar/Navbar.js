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
                <Link to="/">Our Team</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">News</Link>
                <Link to="/aboutBoardMembers">About Board Members</Link>
            </nav>
        </header>
    )
}

export default Navbar
