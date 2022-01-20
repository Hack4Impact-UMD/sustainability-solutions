import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./news.css";
import NewsImage from "./news.png"
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Projects = () => {
    const prev = <FiArrowLeftCircle size={42}/>
    const next = <FiArrowRightCircle size={42}/>

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
                <h1 className="carousel-title">Latest News</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <a className="article" href="https://www.cnn.com/world/live-news/new-covid-variant-south-africa-11-28-21/index.html" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/CovidDoctor.jpg" className="news-img" alt="Doctor"/>
                                    <figcaption className="news-name">
                                        New Covid-19 variant Omicron cases, travel updates from around the world
                                    </figcaption>
                                    <figcaption className="month">November 29, 2021</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://www.offshorewind.biz/2021/11/05/dominion-energy-pushes-ahead-with-usd-9-8-billion-coastal-virginia-offshore-wind/" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Offshore Wind.jpg" className="news-img" alt="Wind turbine"/>
                                    <figcaption className="news-name">
                                        Dominion Energy Pushes Ahead with USD 9.8 Billion Coastal Virginia Offshore Wind
                                    </figcaption>
                                    <figcaption className="month">November 5, 2021</figcaption>
                                </figure>
                                </a>
                            <a className="article" href="https://youtu.be/vfmGSLLC4pE" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Port.jpg" className="news-img" alt="Port"/>
                                    <figcaption className="news-name">
                                        November CVOW Friday Forum on Offshore Wind and Dominion Energy
                                    </figcaption>
                                    <figcaption className="month">November 19, 2021</figcaption>
                                </figure>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <a className="article" href="https://www.offshorewind.biz/2021/11/08/semco-bladt-to-deliver-offshore-substations-for-virginias-2-6-gw-owf/?fbclid=IwAR0r8lMLYkieziwQ96Q_IwPxI3XOgNsorY2WOg5GjWRbLnmbckCVBZ3scG0" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Offshore Substation.jpg" className="news-img" alt="Offshore substation"/>
                                    <figcaption className="news-name">
                                        Semco, Bladt to Deliver Offshore Substations for Virginia’s 2.6 GW OW
                                    </figcaption>
                                    <figcaption className="month">November 8, 2021</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://electrek.co/2021/11/12/belgian-italian-firms-land-1-1b-contract-for-the-us-largest-offshore-wind-farm/?fbclid=IwAR31Z7I7KLyVXaRqHjRbaqioy2XzLhq1uxbZc9xEz00HXtu6w82w0rOyrZA" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/BelgianItalianFirm.jpeg" className="news-img" alt="Belgian Italian Firm"/>
                                    <figcaption className="news-name">
                                            Belgian, Italian firms land $1.1B contract for the largest US offshore wind farm
                                    </figcaption>
                                    <figcaption className="month">November 12, 2021</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://coastalvawind.com/partnerships/become-supplier.aspx" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Supplier.jpg" className="news-img" alt="Supplier"/>
                                    <figcaption className="news-name">
                                        Coastal Offshore Wind: Becoming A Supplier
                                    </figcaption>
                                    <figcaption className="month">December 3, 2021</figcaption>
                                </figure>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="news other">
                <h1 className="carousel-title">Other News</h1>
                <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <a className="article" href="https://www.energy.gov/articles/doe-announces-135-million-sustainable-development-offshore-wind?fbclid=IwAR2MUbl2ju84A034uRApqr3K1cLL_O4YpL_6V6DLw5wV4bXB4MRH8s29qXQ" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Turbines.jpg" className="news-img" alt="Offshore wind turbine"/>
                                    <figcaption className="news-name">
                                        DOE Announces $13.5 Million for Sustainable Development of Offshore Wind
                                    </figcaption>
                                    <figcaption className="month">October 13, 2021</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://sls.gatech.edu/excursion-justice-student-interns-travel-through-south-seeking-truths-civil-rights-climate-and" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Student Interns Travel.jpeg" className="news-img" alt="Student interns traveling through the South"/>
                                    <figcaption className="news-name">
                                        Student Interns Travel Through the South Exploring Civil Rights and Environmental Justice
                                    </figcaption>
                                    <figcaption className="month">February 3, 2020</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://www.virginiamercury.com/2021/06/16/new-mapping-tool-aims-to-clarify-virginia-environmental-justice-debates/" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/Environmental Justice Debates.jpeg" className="news-img" alt="Environmental justice debates"/>
                                    <figcaption className="news-name">
                                        New mapping tool aims to clarify Virginia environmental justice debates
                                    </figcaption>
                                    <figcaption className="month">June 16, 2020</figcaption>
                                </figure>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-page-item">
                            <a className="article" href="https://www.virginiaenergysense.org/2018/11/29/partner-spotlight-center-sustainable-communities/" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/CenterForSustainableCommunities.jpeg" className="news-img" alt="Center for Sustainable Communities"/>
                                    <figcaption className="news-name">
                                        Partner Spotlight: Center for Sustainable Communities
                                    </figcaption>
                                    <figcaption className="month">November 29, 2018</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://www.vims.edu/newsandevents/topstories/2021/erp_ejtool.php" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/MappingTool.jpeg" className="news-img" alt="Mapping tool"/>
                                    <figcaption className="news-name">
                                        New online tool helps better serve environmental justice
                                    </figcaption>
                                    <figcaption className="month">July 19, 2021</figcaption>
                                </figure>
                            </a>
                            <a className="article" href="https://www.npr.org/templates/story/story.php?storyId=126193000" target="_blank" rel="noreferrer">
                                <figure className="news-item">
                                    <img src="/News/GoingGreen.jpg" className="news-img" alt="Going green"/>
                                    <figcaption className="news-name">
                                        Atlanta Environmentalist Helps Black Churches Go Green
                                    </figcaption>
                                    <figcaption className="month">April 22, 2010</figcaption>
                                </figure>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;