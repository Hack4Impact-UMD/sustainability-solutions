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
                                    <a href="https://www.energy.gov/articles/doe-announces-135-million-sustainable-development-offshore-wind?fbclid=IwAR2MUbl2ju84A034uRApqr3K1cLL_O4YpL_6V6DLw5wV4bXB4MRH8s29qXQ" target="_blank" rel="noreferrer">
                                        DOE Announces $13.5 Million for Sustainable Development of Offshore Wind
                                    </a>
                                </figcaption>
                                <figcaption className="month">October 13, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Offshore Wind.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.offshorewind.biz/2021/11/05/dominion-energy-pushes-ahead-with-usd-9-8-billion-coastal-virginia-offshore-wind/" target="_blank" rel="noreferrer">
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
                                    <a href="https://www.offshorewind.biz/2021/11/08/semco-bladt-to-deliver-offshore-substations-for-virginias-2-6-gw-owf/?fbclid=IwAR0r8lMLYkieziwQ96Q_IwPxI3XOgNsorY2WOg5GjWRbLnmbckCVBZ3scG0" target="_blank" rel="noreferrer">
                                        Semco, Bladt to Deliver Offshore Substations for Virginia’s 2.6 GW OW
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 8, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/BelgianItalianFirm.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://electrek.co/2021/11/12/belgian-italian-firms-land-1-1b-contract-for-the-us-largest-offshore-wind-farm/?fbclid=IwAR31Z7I7KLyVXaRqHjRbaqioy2XzLhq1uxbZc9xEz00HXtu6w82w0rOyrZA" target="_blank" rel="noreferrer">
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
                                    <a href="https://www.cnn.com/world/live-news/new-covid-variant-south-africa-11-28-21/index.html" target="_blank" rel="noreferrer">
                                        New Covid-19 variant Omicron cases, travel updates from around the world
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 29, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Student Interns Travel.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://sls.gatech.edu/excursion-justice-student-interns-travel-through-south-seeking-truths-civil-rights-climate-and" target="_blank" rel="noreferrer">
                                        Student Interns Travel Through the South Exploring Civil Rights and Environmental Justice
                                    </a>
                                </figcaption>
                                <figcaption className="month">February 3, 2020</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/Environmental Justice Debates.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.virginiamercury.com/2021/06/16/new-mapping-tool-aims-to-clarify-virginia-environmental-justice-debates/" target="_blank" rel="noreferrer">
                                        New mapping tool aims to clarify Virginia environmental justice debates
                                    </a>
                                </figcaption>
                                <figcaption className="month">June 16, 2020</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <figure className="news-item">
                                <img src="/News/CenterForSustainableCommunities.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.virginiaenergysense.org/2018/11/29/partner-spotlight-center-sustainable-communities/" target="_blank" rel="noreferrer">
                                        Partner Spotlight: Center for Sustainable Communities
                                    </a>
                                </figcaption>
                                <figcaption className="month">November 29, 2018</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/MappingTool.jpeg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.vims.edu/newsandevents/topstories/2021/erp_ejtool.php" target="_blank" rel="noreferrer">
                                        New online tool helps better serve environmental justice
                                    </a>
                                </figcaption>
                                <figcaption className="month">July 19, 2021</figcaption>
                            </figure>
                            <figure className="news-item">
                                <img src="/News/GoingGreen.jpg" className="news-img" alt="project"/>
                                <figcaption className="news-name">
                                    <a href="https://www.npr.org/templates/story/story.php?storyId=126193000" target="_blank" rel="noreferrer">
                                        Atlanta Environmentalist Helps Black Churches Go Green
                                    </a>
                                </figcaption>
                                <figcaption className="month">April 22, 2010</figcaption>
                            </figure>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;