import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./projects.css";
import ProjectImage from "./projects.png"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Project from './Project';

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
                            <Project
                                img="/Projects/ScienceInvestigation.jpg"
                                title="Advanced Atmospheric Research Monitoring Station"
                                alt="Science investigation"
                                description="The AARMS project is earth science laboratory used to research and measure atmospheric pollutants and to provide weather monitoring capability, stem education and community science engagement."
                            ></Project>
                            <Project
                                img="/Projects/ExtremeHeat.jpg"
                                title="Building a Weather Ready Nation for ALL"
                                alt="Extreme heat"
                                description="The projects provides under resourced communities effective measures to build resilience, minimize hazards, mitigate vulnerabilities and reduce overall risk to communities from severe weather."
                            ></Project>
                            <Project
                                img="/Projects/Solarfield.jpg"
                                title="Center for Energy, Infrastructure and Renewable Technology"
                                alt="Solar field"
                                description="A renewable energy and infrastructure workforce development center designed to provide training, credentialing, and career pathway developmental activities mostly to under served communities to create a workforce for the clean energy economy."
                            ></Project>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <Project
                                img="/Projects/NASA.jpg"
                                title="Prosperity for ALL"
                                alt="NASA"
                                description="An initiative to create decent work and sustainable wage jobs in a wide variety of career pathways."
                            ></Project>
                            <Project
                                img="/Projects/ECODistrictFamily.jpg"
                                title="ECO District Hampton Roads"
                                alt="ECODistrict"
                                description="An approach to revitalize a community based on equity, resilience and climate action with the aim of creating district scale sustainability through priorities of health and wellness, creating a sense of place, connectivity, living infrastructure and resource restoration."
                            ></Project>
                            <Project
                                img="/Projects/Turbine.jpg"
                                title="Energy for ALL"
                                alt="Wind turbine"
                                description="A community scale initiative to designed to bring education and awareness about measures to reduce energy burdens, expend energy efficiency and renewable energy in under resourced communities."
                            ></Project>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <Project
                                img="/Projects/InspectingPollutedPond.jpg"
                                title="Environmental Justice Academy"
                                alt="Inspecting polluted pond"
                                description="A nine month environmental education program designed to increase capacity and the leadership capability of front line and fence line residents in underserved communities to mitigate impacts of pollution and related environmental challenges."
                            ></Project>
                            <Project
                                img="/Projects/CovidDeaths.jpg"
                                title="Advancing to 100"
                                alt="Covid deaths"
                                description="A grassroots campaign to increase the percentage of the population to above hurd immunity levels and to achieve the highest possible number of persons totally vaccinated against COVID."
                            ></Project>
                            <Project
                                img="/Projects/YouthScience.jpg"
                                title="Project Success"
                                alt="Youth exploring science"
                                description="A youth based program designed to build job skills utilizing a Youth Build model to advance into clean energy career pathways."
                            ></Project>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="projects">
                <h1 className="carousel-title">Past Projects</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <Project
                                img="/Projects/WomenInScience.jpg"
                                title="Inspire and Empower"
                                alt="Women in science"
                                description="An international program designed to help women and girls advance in science, energy and environmental fields."
                            ></Project>
                            <Project
                                img="/Projects/StemEducation.jpg"
                                title="JUST Science"
                                alt="Students learning STEM"
                                description="A stem education initiative designed to help under resourced communities to mitigate environmental challenges and build community capacity and resiliency through the use of science, technology and engineering."
                            ></Project>
                            <Project
                                img="/Projects/WomenEngineering.jpg"
                                title="SMART Community Initiative"
                                alt="Women engineering"
                                description="A program designed to build capacity in communities through the design, development and deployment of  computer science and data driven tools to mitigate environmental impacts including climate."
                            ></Project>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <Project
                                img="/Projects/SolarField.jpg"
                                title="Sustainable Cities and Transportation"
                                alt="Solar field"
                                description="A program designed to help cities and communities achieve sustainability with a focus on  creating vibrant, sustainable cities and communities including clean transportation solutions and green infrastructure."
                            ></Project>
                            <Project
                                img="/Projects/ElizabethRiverProject.jpg"
                                title="Just Planning, Growth and Development"
                                alt="Elizabeth river"
                                description="An initiative to ensure city planning, zoning and development is done in a just and equitable manner to maximize community engagement and direct participation in processes that are important to their quality of life."
                            ></Project>
                            <Project
                                img="/Projects/Turbine.jpg"
                                title="Project Good Wind"
                                alt="Wind turbine"
                                description="An initiative to help advance Offshore Wind as a viable, renewable energy alternative including workforce and supply chain development, community education and awareness, and technical support."
                            ></Project>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <Project
                                img="/Projects/OilRidge.jpg"
                                title="Institute for Energy Efficiency and Renewable Energy"
                                alt="Oil ridge"
                                description="An energy research, applications, and evaluation facility designed to advance energy concepts from conception through applications on a wide variety of energy sources."
                            ></Project>
                            <Project
                                img="/Projects/FaithLeaders.jpg"
                                title="Sustainable and Equitable Development for ALL"
                                alt="Faith leaders"
                                description="A global initiative to advance the seventeen sustainable development goals with an emphasis on reducing climate, reducing hunger and poverty, economic development, reducing inequality and creating sustainable cities and communities."
                            ></Project>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;