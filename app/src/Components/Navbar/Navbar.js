import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Navigation, Nav, Container } from 'react-bootstrap';
import './navbar.css'
import logo from './draft-logo.png'

function Navbar() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    return (
        <>
            <Navigation expand="lg" expanded={navActive}>
                <Container>
                    <Navigation.Brand>
                        <Link className="nav-brand" to="/" onClick={toggleNav}>
                            <img src={logo} alt="logo"></img>
                            <div>SSG</div>
                        </Link>
                    </Navigation.Brand>
                    <div className={navActive ? "menu-toggle active" : "menu-toggle"} onClick={toggleNav}>
                        <i className={navActive ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <Navigation.Collapse id="basic-navbar-nav" className="justify-content-end" onClick={toggleNav}>
                        <Nav className="">
                            <Link to="/about" className="nav-link">Our Team</Link>
                            <Link to="/" className="nav-link">About</Link>
                            <Link to="/" className="nav-link">Projects</Link>
                            <Link to="/" className="nav-link">News</Link>
                            <Link to="/" className="nav-link">Contact Us</Link>
                            <Link to="/" className="nav-link">Donate</Link>
                        </Nav>
                    </Navigation.Collapse>
                </Container>
            </Navigation>
        </>
    )
}

export default Navbar
