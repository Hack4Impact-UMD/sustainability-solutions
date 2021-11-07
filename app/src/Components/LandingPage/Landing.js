import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './landing.css';

import NewsImage from './NewsImage.png';
import MissionIcon from './MissionIcon.png';
import TeamsIcon from './TeamsIcon.png';
import NewsIcon from './NewsIcon.png';

function Landing () {
    return (
        <div className="landing-container">
            <div>
                <p className="intro">
                    SUSTAINABILITY <br />
                    SOLUTIONS <br />
                    INSTITUTE
                </p>
                <p className="intro-cap">embrace pathways of sustainability</p>
            </div>
            <div className="section2">
                <Link to="/mission">
                    <img className="missions-icon" src={MissionIcon} />
                </Link>
                <Link to="/about">
                    <img className="teams-icon" src={TeamsIcon} />
                </Link>
                <Link to="/news">
                    <img className="news-icon" src={NewsIcon} />
                </Link>
            </div>
            <div className="news-sec">
                <h1>Current News</h1>
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner news-slides">
                        <div className="carousel-item">
                            <img
                                className="news-image"
                                src={NewsImage}
                            />
                            <p className="news-info"> 
                                Title <br/>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;