import React from 'react';
import { Link } from 'react-router-dom';

import InstagramIcon from './instagram-brands.svg';
import FacebookIcon from './facebook-square-brands.svg';
import TwitterIcon from './twitter-brands.svg';
import logo from './logo.png';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-col">
                <img src={logo} /> <br/>
                <Link to="/contactus">
                    <button> CONTACT US </button>
                </Link>
            </div>
            <div className="white-bar" />
            <div className="links-col">
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>Team</p></Link>
                <Link to="/mission"><p>Mission</p></Link>
                <Link to="/news"><p>News</p></Link>
                <Link to="/donations"><p>Donations</p></Link>
            </div>
            <div className="white-bar" />
            <div className="icon-col">
                <a herf="#"><img className="icons" src={InstagramIcon}></img></a> <br/>
                <a herf="#"><img className="icons" src={FacebookIcon}></img></a> <br/>
                <a herf="#"><img className="icons" src={TwitterIcon}></img></a>
            </div>
        </div>
    )
}

export default Footer;
