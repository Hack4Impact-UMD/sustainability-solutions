import React from "react";
import "./About.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";

function About() {
  return (
    <div className="about-page">
      <div className="header-border">
        <div className="header">
          <img src='/About/our_mission_header.png' alt='About SSG' />
          <h1 class="header-title">ABOUT SSG</h1>
          <div class="header-title underline"></div>
        </div>
      </div>

      <section className="our-mission">
        <Container >
          <h1>Our Mission</h1>
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
          <h1>How Can We Help?</h1>
          <Carousel nextLabel="" prevLabel="">
            <Carousel.Item>
              <Row>
                <Col>
                  <i class="fas fa-signal"></i>
                  <br />
                  <h4>Research</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nesciunt quod atque aspernatur quos aut cumque, cupiditate distinctio quasi dicta sunt modi debitis ipsum laudantium harum eaque enim velit similique!</p>
                </Col>
                <Col>
                  <i class="fas fa-search"></i>
                  <br />
                  <h4>Evaluation Analysis</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nesciunt quod atque aspernatur quos aut cumque, cupiditate distinctio quasi dicta sunt modi debitis ipsum laudantium harum eaque enim velit similique!</p>
                </Col>
                <Col>
                  <i class="fas fa-file-alt"></i>
                  <br />
                  <h4>Assessment</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nesciunt quod atque aspernatur quos aut cumque, cupiditate distinctio quasi dicta sunt modi debitis ipsum laudantium harum eaque enim velit similique!</p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              slide 2
            </Carousel.Item>
            <Carousel.Item>
              slide 3
            </Carousel.Item>
            <Carousel.Item>
              slide 4
            </Carousel.Item>
            <Carousel.Item>
              slide 5
            </Carousel.Item>
          </Carousel>
        </Container>

      </section>
      
      <section className="organization">
        <Container>
          <h1>Organization of SSG</h1>
        </Container>
      </section>

    </div>
  );
}

export default About;
