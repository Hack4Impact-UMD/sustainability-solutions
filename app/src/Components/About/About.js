import React from "react";
import diagram from "./ssg_diagram.png"
import garry from "./garry harris.jpg"
import AboutHeader from "./about us.png"
import "./About.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

function About() {
  const prev = <FiArrowLeftCircle size={42}/>
  const next = <FiArrowRightCircle size={42}/>

  return (
    <div className="about-page">
      <div className="header-border-about">
        <div className="header-about">
          <img src={AboutHeader} alt='About SSG' />
          <h1 class="header-title-about">ABOUT US</h1>
          <div class="header-title-about underline-about"></div>
        </div>
      </div>

      <section className="our-mission">
        <Container >
          <h1 className="about-titles">Who Are We?</h1>
          <h2><em>Creating a more just, sustainable, resilient and equitable world for all.</em></h2>
          <Row>
              <p className="about-description">
                We are a team of engineers, scientists, community planners, educators, and policy advocates who work collectively to provide high quality, viable and credible solutions to ensure the delivery of a broad range of sustainable development approaches to customers worldwide.
              </p>
          </Row>
        </Container>
      </section>

      <section className="founder">
        <Container>
          <h1 className="about-titles">Meet Our Founder</h1>
          <img src={garry} alt="Garry Harris - SSG Founder" className="garry" />
          <h2>Garry Harris</h2>
          <Row>
            <Col>
              <p>
                As President and CEO, Garry Harris envisions a world based on outcomes that create vibrant cities, communities, neighborhoods that are just, sustainable, equitable, and resilient for all of its citizens and residents.  With more than three and a half decades of experience in the energy and environmental and sustainability field Mr. Harris' leadership has resulted in the design, development and deployment of a broad
              </p>
            </Col>
            <Col>
              <p>
                range of effective project management and program development, policy, engineering, scientific and technology solutions that work for all residents and citizens. Armed with a strong academic background, and a rare combination of experience and a performance track record Mr. Harris is ready and prepared to lead his organization in a manner that stresses high quality delivery, innovation and a customer first approach.
              </p>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="carousel">
        <Container slide={false} interval={9000}>
          <h1 className="about-titles">Our Services</h1>
          <Carousel prevLabel={null} nextLabel={null} prevIcon={prev} nextIcon={next}>
            <Carousel.Item>
              <Row>
                <Col>
                  <i class="fas fa-search"></i>
                  <br />
                  <h4>Analysis</h4>
                </Col>
                <Col>
                  <i class="fas fa-palette"></i>
                  <br />
                  <h4>Design</h4>
                </Col>
                <Col>
                  <i class="fas fa-signal"></i>
                  <br />
                  <h4>Research</h4>
                </Col>
                <Col>
                  <i class="fas fa-file-alt"></i>
                  <br />
                  <h4>Assessment</h4>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <i class="fas fa-clipboard-list"></i>
                  <br />
                  <h4>Planning</h4>
                </Col>
                <Col>
                  <i class="fas fa-clipboard-check"></i>
                  <br />
                  <h4>Licensing and Permiting</h4>
                </Col>
                <Col>
                  <i class="fas fa-hard-hat"></i>
                  <br />
                  <h4>Engineering</h4>
                </Col>
                <Col>
                  <i class="fas fa-file-alt"></i>
                  <br />
                  <h4>Evaluation</h4>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>

      </section>

      <section className="organization">
        <Container>
          <h1 className="about-titles">The Organization of SSG</h1>
          <img src={diagram} alt="SSG Organization Diagram" className="diagram" />
        </Container>
      </section>

    </div>
  );
}

export default About;
