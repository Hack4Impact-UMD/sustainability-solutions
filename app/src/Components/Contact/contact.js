import styles from "./contact.module.css";
import {
  Container,
  Image,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import IntroImage from "./IntroImage.png";

function contact() {
  return (
    <div className={styles.main}>
      <div className={styles.imageDiv}>
        <Image
          className={styles.image}
          src={IntroImage}
          alt={"Contact us image"}
        />
      </div>
      <div className={styles.welcometext}>
        <p>
          Have questions? Send us a message!
       </p>
      </div>
      <div className={styles.container}>
        <Container fluid>
          <Row>
            <Col>
              <div className={styles.form}>
                <Form>
                  <Row className="formName">
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control className={styles.fields} type="fname" placeholder="John" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control className={styles.fields} type="lname" placeholder="Smith" />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="heading">Email*</Form.Label>
                      <Form.Control className={styles.fields} type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} controlId="formGridNumber">
                      <Form.Label className="heading">Phone Number</Form.Label>
                      <Form.Control className={styles.fields} type="phonenumber" placeholder="(###)-(###)-(####)" />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} controlId="formGridSubject">
                      <Form.Label className="heading">Subject*</Form.Label>
                      <Form.Control className={styles.fields} type="subject" placeholder="Enter subject" />
                    </Form.Group>
                  </Row>

                  <Row className={styles.formLabels}>
                    <Form.Group as={Col} className="message">
                      <Form.Label className="heading">Message*</Form.Label>
                      <Form.Control
                        className={styles.fields}
                        as="textarea"
                        placeholder="Leave your message here"
                        style={{ height: "100px" }}
                      />
                    </Form.Group>
                  </Row>

                  <Button className={styles.button} variant="primary" type="submit">
                    SUBMIT
                 </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default contact;


