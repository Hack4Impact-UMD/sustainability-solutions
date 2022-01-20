import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import InstagramIcon from './instagram-brands.svg';
// import FacebookIcon from './facebook-square-brands.svg';
// import TwitterIcon from './twitter-brands.svg';
import logo from './logo.png';

import './Footer.css';

function Footer() {
    // Array of links to be displayed in navbar
    const links = [
        { name: "Home", path: '/', color: '#2D758C'},
        { name: 'Our Team', path: '/ourteam', color: '#CF4917' }, 
        { name: 'About', path: '/about', color: '#985914' }, 
        { name: 'Projects', path: '/projects', color: '#D0B285' }, 
        { name: 'News', path: '/news', color: '#2D758C' }, 
        { name: 'Contact Us', path: '/contactus', color: '#758C33' }, 
        { name: 'Donate', path: '/donations', color: '#F9AC3D' },
    ];
    const path = useLocation().pathname;

    return (
        <div className="footer-container">
            <div className="logo-col">
                <img src={logo} alt="SSG logo"/> <br/>
                <Link to="/contactus">
                    <button>CONTACT US</button>
                </Link>
            </div>
            <div className="second-col">
                <div className="white-bar" />
                <div className="links-col">
                    {links.map(link =>
                        <Link to={link.path} className="footer-links" style={path === link.path ? { color: link.color } : {}}>{link.name}</Link>
                    )}
                </div>
                {/* <div className="white-bar" />
                <div className="icon-col">
                    <a herf="#"><img className="icons" src={InstagramIcon}></img></a> <br/>
                    <a herf="#"><img className="icons" src={FacebookIcon}></img></a> <br/>
                    <a herf="#"><img className="icons" src={TwitterIcon}></img></a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;
