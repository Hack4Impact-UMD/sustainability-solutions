import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./projects.css";
import ProjectImage from "./projects.png"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Projects = () => {
    const prev = <GrFormPrevious size={70}/>
    const next = <GrFormNext size={70}/>

    return (
        <div className="project-page">
            <div className="project-header-border">
                <div className="project-header">
                    <img src={ProjectImage} alt='climate action'/>
                    <p class="project-header-title">PROJECTS</p>
                    <div class="project-header-title project-underline"></div>
                </div>
            </div>
            <div className="projects">
                <h1 className="carousel-title">Current Projects</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/ScienceInvestigation.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Advanced Atmospheric Research Monitoring Station</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/ExtremeHeat.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Building a Weather Ready Nation for ALL</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/SolarField.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Center for Energy, Infrastructure and Renewable Technology</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/NASA.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Prosperity for ALL</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/ECODistrictFamily.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">ECO District Hampton Roads</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/Turbine.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Energy for ALL</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/InspectingPollutedPond.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Environmental Justice Academy</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/CovidDeaths.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Advancing to 100</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/YouthScience.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Project Success</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="projects">
                <h1 className="carousel-title">Past Projects</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/WomenInScience.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Inspire and Empower</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/StemEducation.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">JUST Science</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/WomenEngineering.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">SMART Community Initiative</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/SolarField.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Sustainable Cities and Transportation</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/ElizabethRiverProject.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Just Planning, Growth and Development</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/Turbine.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Project Good Wind</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src="/Projects/OilRidge.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Institute for Energy Efficiency and Renewable Energy</figcaption>
                            </figure>
                            <figure className="project">
                                <img src="/Projects/FaithLeaders.jpg" className="project-img" alt="project"/>
                                <figcaption className="project-name">Sustainable and Equitable Development for ALL</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;