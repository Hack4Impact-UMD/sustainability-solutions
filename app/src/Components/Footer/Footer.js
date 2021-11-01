import React from 'react';
import { Link } from 'react-router-dom';

import InstagramIcon from './instagram-brands.svg';
import FacebookIcon from './facebook-square-brands.svg';
import TwitterIcon from './twitter-brands.svg';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="logo-col">
                <p>
                    Sutainability <br/>
                    Solutions <br/>
                    Institute
                </p>
                <Link to="/contactus"><button> CONTACT US </button></Link>
            </div>
            <div className="links-col">
                <Link to="/">Home</Link> <br/>
                <Link to="/about">Team</Link> <br/>
                <Link to="/mission">Mission</Link> <br/>
                <Link to="/news">News</Link> <br/>
                <Link to="/donations">Donations</Link>
            </div>
            <div className="icon-col">
                <a><img src={InstagramIcon}></img></a>
                <a><img src={FacebookIcon}></img></a>
                <a><img src={TwitterIcon}></img></a>
            </div>
        </div>
    )
}

export default Footer;
