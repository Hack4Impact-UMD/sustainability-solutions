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
          <h2>Creating a more just, sustainable, resilient and equitable world for all.</h2>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit pretium posuere. Ut ligula purus, dignissim at ipsum iaculis, laoreet ornare felis. Fusce elit lorem, malesuada vel orci nec, congue accumsan odio. Nulla facilisi. Fusce placerat, felis in suscipit sollicitudin, purus augue porta ex, id mollis metus nisl sed lacus. Suspendisse dictum vitae lorem eget condimentum. Sed a nisl iaculis, sodales sapien vitae, placerat lectus. Sed rutrum lacus magna. Ut ut mi vel elit cursus lobortis. Nulla lacus est, auctor et suscipit ut, luctus id dolor.
              </p>
            </Col>
            <Col>
              <p>
                Proin diam purus, auctor quis urna quis, porta laoreet sem. In nec aliquam sem. Quisque sed velit nec mi luctus elementum in nec quam. Praesent volutpat neque sem, sed iaculis nibh accumsan ullamcorper. Sed orci felis, gravida dapibus urna non, faucibus vehicula elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer efficitur, ex vitae sagittis hendrerit, nibh elit semper ligula, non molestie ante lacus eu arcu. Vestibulum ornare suscipit nisl a varius. Etiam congue suscipit tellus, a aliquet ante aliquam id.
              </p>
            </Col>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit pretium posuere. Ut ligula purus, dignissim at ipsum iaculis, laoreet ornare felis. Fusce elit lorem, malesuada vel orci nec, congue accumsan odio. Nulla facilisi. Fusce placerat, felis in suscipit sollicitudin, purus augue porta ex, id mollis metus nisl sed lacus. Suspendisse dictum vitae lorem eget condimentum. Sed a nisl iaculis, sodales sapien vitae, placerat lectus. Sed rutrum lacus magna. Ut ut mi vel elit cursus lobortis. Nulla lacus est, auctor et suscipit ut, luctus id dolor.
              </p>
            </Col>
            <Col>
              <p>
                Proin diam purus, auctor quis urna quis, porta laoreet sem. In nec aliquam sem. Quisque sed velit nec mi luctus elementum in nec quam. Praesent volutpat neque sem, sed iaculis nibh accumsan ullamcorper. Sed orci felis, gravida dapibus urna non, faucibus vehicula elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer efficitur, ex vitae sagittis hendrerit, nibh elit semper ligula, non molestie ante lacus eu arcu. Vestibulum ornare suscipit nisl a varius. Etiam congue suscipit tellus, a aliquet ante aliquam id.
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
          <h1 className="about-titles">Organization of SSG</h1>
          <img src={diagram} alt="SSG Organization Diagram" className="diagram" />
        </Container>
      </section>

    </div>
  );
}

export default About;
