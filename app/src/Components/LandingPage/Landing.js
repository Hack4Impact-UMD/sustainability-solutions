import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './landing.css';
import NewsImage from './NewsImage.png';
import MissionBtn from './MissionBtn.png';
import TeamBtn from './TeamBtn.png';
import NewsBtn from './NewsBtn.png';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

function Landing () {
    const prev = <FiArrowLeftCircle size={42}/>
    const next = <FiArrowRightCircle size={42}/>

    return (
        <div className="landing-container">
            <div>
                <p className="intro">
                    SUSTAINABILITY <br />
                    SOLUTIONS <br />
                    GROUP
                </p>
                <p className="intro-cap">embrace pathways of sustainability</p>
            </div>
            <div className="section2">
                <Link to="/mission">
                    <img src={MissionBtn} />
                </Link>
                <Link to="/about">
                    <img src={TeamBtn} />
                </Link>
                <Link to="/news">
                    <img src={NewsBtn} />
                </Link>
            </div>
            <div className="news-sec">
                <h1>News Highlight</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src={NewsImage} />
                            <p className="news-caption">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src={NewsImage} />
                            <p className="news-caption">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src={NewsImage} />
                            <p className="news-caption">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Landing;