import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from './draft-logo.png'

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <div className="brand">
                    <img src={logo} alt="logo"></img>
                    <div className="title">SSI</div>
                </div>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Our Team</Link>
                <Link to="/mission">Mission</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/news">News</Link>
                <Link to="/donations">Donations</Link>
            </nav>
        </header>
    )
}

export default Navbar
