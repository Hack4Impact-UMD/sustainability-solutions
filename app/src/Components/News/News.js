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
                                <img src="/News/Turbines.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.energy.gov/articles/doe-announces-135-million-sustainable-development-offshore-wind?fbclid=IwAR2MUbl2ju84A034uRApqr3K1cLL_O4YpL_6V6DLw5wV4bXB4MRH8s29qXQ" target="_blank">
                                        DOE Announces $13.5 Million for Sustainable Development of Offshore Wind
                                    </a>
                                </figcaption>
                                <figcaption className="month">October 13, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Offshore Wind.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.offshorewind.biz/2021/11/05/dominion-energy-pushes-ahead-with-usd-9-8-billion-coastal-virginia-offshore-wind/" target="_blank">
                                        Dominion Energy Pushes Ahead with USD 9.8 Billion Coastal Virginia Offshore Wind
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 5, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Port.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://youtu.be/vfmGSLLC4pE" target="_blank">
                                        November CVOW Friday Forum on Offshore Wind and Dominion Energy
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 19, 2021</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src="/News/Offshore Substation.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.offshorewind.biz/2021/11/08/semco-bladt-to-deliver-offshore-substations-for-virginias-2-6-gw-owf/?fbclid=IwAR0r8lMLYkieziwQ96Q_IwPxI3XOgNsorY2WOg5GjWRbLnmbckCVBZ3scG0" target="_blank">
                                        Semco, Bladt to Deliver Offshore Substations for Virginia’s 2.6 GW OW
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 8, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/BelgianItalianFirm.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://electrek.co/2021/11/12/belgian-italian-firms-land-1-1b-contract-for-the-us-largest-offshore-wind-farm/?fbclid=IwAR31Z7I7KLyVXaRqHjRbaqioy2XzLhq1uxbZc9xEz00HXtu6w82w0rOyrZA" target="_blank">
                                        Belgian, Italian firms land $1.1B contract for the largest US offshore wind farm
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 12, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Supplier.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://coastalvawind.com/partnerships/become-supplier.aspx" target="_blank">
                                        Coastal Offshore Wind: Becoming A Supplier
                                    </a>
                                </figcaption>
                                <figcaption className="month">December 3, 2021</figcaption>
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
                                <img src="/News/CovidDoctor.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.cnn.com/world/live-news/new-covid-variant-south-africa-11-28-21/index.html" target="_blank">
                                        New Covid-19 variant Omicron cases, travel updates from around the world
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 29, 2021</figcaption>
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
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;