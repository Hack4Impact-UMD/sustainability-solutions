import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as Navigation, Nav, Container } from 'react-bootstrap';
import './navbar.css'
import logo from './sustainability-solutions-group.png'

function Navbar() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        if (window.innerWidth < 992) {
            setNavActive(!navActive)
        }
    }

    // Array of links to be displayed in navbar
    const links = [
        { name: 'Our Team', path: '/ourteam', color: '#CF4917' }, 
        { name: 'About', path: '/about', color: '#985914' }, 
        { name: 'Projects', path: '/projects', color: '#D0B285' }, 
        { name: 'News', path: '/news', color: '#2D758C' }, 
        { name: 'Contact Us', path: '/contactus', color: '#758C33' }, 
        { name: 'Donate', path: '/donate', color: '#F9AC3D' },
    ];
    const path = useLocation().pathname;

    return (
        <>
            <Navigation expand="lg" expanded={navActive}>
                <Container>
                    <Navigation.Brand>
                        <Link className="nav-brand" to="/">
                            <img src={logo} alt="logo"></img>
                            <div>SSG</div>
                        </Link>
                    </Navigation.Brand>
                    <div className={navActive ? "menu-toggle active" : "menu-toggle"} onClick={toggleNav}>
                        <i className={navActive ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <Navigation.Collapse id="basic-navbar-nav" className="justify-content-end" onClick={toggleNav}>
                        <Nav className="">
                            {links.map(link =>
                                <Link key={link.name} to={link.path} className="nav-link" style={path === link.path ? { color: link.color } : {}}>{link.name}</Link>
                            )}
                        </Nav>
                    </Navigation.Collapse>
                </Container>
            </Navigation>
        </>
    )
}

export default Navbar
