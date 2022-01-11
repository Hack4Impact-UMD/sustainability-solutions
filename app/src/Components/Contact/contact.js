import styles from "./contact.module.css";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import React, { useRef } from "react";
import HeaderImage from "./contact us.png";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b8ilepj",
        "template_xahswbk",
        e.target,
        "user_XLX5JMzzhYyKVNxgIesYU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className={styles.main}>
      <div className={styles.headerBorder}>
        <div className={styles.contactHeader}>
          <img src={HeaderImage} alt="contact page header"/>
          <h1 class={styles.headerTitle}>CONTACT US</h1>
          <div class={styles.contactUnderline}>
          </div>
        </div>
      </div>
      <div className={styles.welcometext}>
        <p>Interested in working with us? Have any questions?</p>
        <p>Send us a message!</p>
      </div>
      <div className={styles.container}>
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.form}>
                <Form ref={form} onSubmit={sendEmail}>
                  <Row className="formName">
                    <Form.Group className={styles.formLabels}
                      as={Col}
                      controlId="formGridFirstName"
                      name="first_name"
                    >
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        type="fname"
                        placeholder="John"
                        name="first_name"
                      />
                    </Form.Group>

                    <Form.Group className={styles.formLabels}
                      as={Col}
                      controlId="formGridLastName"
                      name="last_name"
                    >
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        type="lname"
                        placeholder="Smith"
                        name="last_name"
                      />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} controlId="formGridEmail" name="email">
                      <Form.Label className="heading">Email*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        type="email"
                        placeholder="Enter email"
                        name="email"
                      />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group
                      as={Col}
                      controlId="formGridNumber"
                      name="number"
                    >
                      <Form.Label className="heading">Phone Number</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        type="phonenumber"
                        placeholder="(###)-(###)-(####)"
                        name="number"
                      />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group
                      as={Col}
                      controlId="formGridSubject"
                      name="subject"
                    >
                      <Form.Label className="heading">Subject*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        type="subject"
                        placeholder="Enter subject"
                        name="subject"
                      />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} className="message" name="message">
                      <Form.Label className="heading">Message*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        as="textarea"
                        placeholder="Leave your message here"
                        style={{ height: "100px" }}
                        name="message"
                      />
                    </Form.Group>
                  </Row>
                  <div className={styles.buttonTeam}>
                    <div className={styles.recap}>
                      <ReCAPTCHA
                        sitekey="6LfBBkodAAAAAMbquiTN34opmljr5vUbnKqwHsdc"
                        onChange={onChange}
                      />
                    </div>
                    <Button
                      className={styles.button}
                      variant="primary"
                      type="submit"
                    >
                      SUBMIT
                  </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
