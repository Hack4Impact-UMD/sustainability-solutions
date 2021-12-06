import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./news.css";
import NewsImage from "./news.png"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Projects = () => {
    const prev = <GrFormPrevious size={70}/>
    const next = <GrFormNext size={70}/>

    return (
        <div className="news-page">
            <div className="news-header-border">
                <div className="news-header">
                    <img src={NewsImage} alt='climate action'/>
                    <p class="news-header-title">NEWS</p>
                    <div class="news-header-title news-underline"></div>
                </div>
            </div>
            <div className="news">
                <h1 className="carousel-title">Latest</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="news category1">
                <h1 className="carousel-title">Category 1</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="news">
                <h1 className="carousel-title">Category 2</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src={NewsImage} className="news-img" alt="project"/>
                                <figcaption className="news-name">Description 3</figcaption>
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