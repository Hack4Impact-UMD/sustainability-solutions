import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./projects.css";
import NewsImage from "./meet_the_board_header.jpg"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Projects = () => {
    const prev = <GrFormPrevious size={70}/>
    const next = <GrFormNext size={70}/>

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
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="projects">
                <h2>Past Projects</h2>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;