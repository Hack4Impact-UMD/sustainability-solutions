import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./news.css";
import NewsImage from "./meet_the_board_header.jpg"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const News = () => {
    const prev = <GrFormPrevious size={70}/>
    const next = <GrFormNext size={70}/>

    return (
        <div>
            <div className="news-header-border">
                <div className="news-header">
                    <img src='/aboutBoardMembers/meet_the_board_header.jpg' alt='wave'/>
                    <h1 class="news-header-title">NEWS</h1>
                    <div class="news-header-title project-underline"></div>
                </div>
            </div>
            <div className="news-box">
                <h2>Latest</h2>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="nwes-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="news">
                <h2>Category 1</h2>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>  
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>  
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="news">
                <h2>Category 2</h2>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 1</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="nwes-img"/>
                                <figcaption className="news-name">Description 2</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
                                <figcaption className="news-name">Description 3</figcaption>
                                <figcaption className="month">Month 00, 0000</figcaption>
                            </figure>
                            <figure className="news">
                                <img src={NewsImage} className="news-img"/>
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

    export default News;

