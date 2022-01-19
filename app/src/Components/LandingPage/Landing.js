import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './landing.css';
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
                <Link to="/about">
                    <img src={MissionBtn} alt="Mission"/>
                </Link>
                <Link to="/ourteam">
                    <img src={TeamBtn}  alt="Team"/>
                </Link>
                <Link to="/news">
                    <img src={NewsBtn}  alt="News"/>
                </Link>
            </div>
            <div className="news-sec">
                <h1>News Highlights</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src="/News/Offshore Wind.jpg" alt="Offshore wind turbines" />
                            <p className="news-caption">
                                US energy company Dominion Energy is filing plans with the Virginia State Corporation Commission for approval to construct the 2.6 GW Coastal Virginia Offshore Wind (CVOW) commercial project.
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src="/News/CovidDoctor.jpg" alt="Doctor" />
                            <p className="news-caption">
                                New Omicron variant has the world on edge. Travel restrictions are imposed over new Covid-19 variant. 
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="landing-item">
                            <img src="/News/Turbines.jpg" alt="Wind turbines"/>
                            <p className="news-caption">
                                Department of Energy (DOE) announces $13.5 Million for sustainable development of offshore wind.
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Landing;