import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './landing.css';
import NewsImage from './NewsImage.png';
import MissionBtn from './MissionBtn.png';
import TeamBtn from './TeamBtn.png';
import NewsBtn from './NewsBtn.png';

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
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
  {/*
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
*/}   
            </div>
        </div>
    );
}

export default Landing;