import React, { useRef } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import emailjs from "emailjs-com";
import HeadingImg from './HeadingImg.png';
import './Donations.css';

function Donations() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                "service_b8ilepj",
                "template_xahswbk",
                form.current,
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
    };

    return (
        <div>
            <div className="header-border">
                <div className="header">
                    <img src={HeadingImg}/>
                    <div className="header-title">
                        <h1>DONATE</h1>
                        <div className="donate-underline" />
                    </div>
                </div>
            </div>
            <Container fluid>
                <Row>
                    <Col className="donation-form">
                        <Form ref={form} onSubmit={sendEmail}>
                        <Row className="formName">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="fname"
                                placeholder="John"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="lname"
                                placeholder="Smith"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="heading">Email*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="email"
                                placeholder="Enter email"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label className="heading">Phone Number</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="phonenumber"
                                placeholder="(###)-(###)-(####)"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridSubject">
                            <Form.Label className="heading">Subject*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="subject"
                                placeholder="Enter subject"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} className="message">
                            <Form.Label className="heading">Message*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                as="textarea"
                                placeholder="Leave your message here"
                                style={{ height: "100px" }}
                            />
                            </Form.Group>
                        </Row>

                        <Button
                            className="donate-button"
                            variant="primary"
                            type="submit"
                        >
                            SUBMIT
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Donations;