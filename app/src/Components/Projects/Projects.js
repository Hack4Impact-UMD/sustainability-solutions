import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./projects.css";
import NewsImage from "./meet_the_board_header.jpg"

const Projects = () => {
    return (
        <div>
            <div className="project-header-border">
                <div className="project-header">
                    <img src='/aboutBoardMembers/meet_the_board_header.jpg' alt='wave'/>
                    <h1 class="project-header-title">PROJECTS</h1>
                    <div class="project-header-title project-underline"></div>
                </div>
            </div>
            <div className="projects">
                <h2>Current Projects</h2>
                <Carousel>
                    <Carousel.Item>
                        <div className="item">
                            <figure>
                                <img src={NewsImage} className="proj"/>
                                <figcaption className="name">Description</figcaption>
                                <figcaption className="position">Month</figcaption>
                            </figure>
                            <figure>
                                <img src={NewsImage} className="proj"/>
                                <figcaption className="name">Description</figcaption>
                                <figcaption className="position">Month</figcaption>
                            </figure>
                            <figure>
                                <img src={NewsImage} className="proj"/>
                                <figcaption className="name">Description</figcaption>
                                <figcaption className="position">Month</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={NewsImage} className="proj"/>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={NewsImage} className="proj"/>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit  
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;