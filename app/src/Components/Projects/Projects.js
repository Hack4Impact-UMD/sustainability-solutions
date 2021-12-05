import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./projects.css";
import NewsImage from "./ClimateActionNowImage.jpg"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Projects = () => {
    const prev = <GrFormPrevious size={70}/>
    const next = <GrFormNext size={70}/>

    return (
        <div className="project-page">
            <div className="project-header-border">
                <div className="project-header">
                    <img src={NewsImage} alt='climate action'/>
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
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
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
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
                                <figcaption className="project-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="project">
                                <img src={NewsImage} className="project-img" alt="project"/>
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