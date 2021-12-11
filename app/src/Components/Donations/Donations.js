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
            <p className="form-titles"> Select an Amount </p>
            <Container fluid>
                <Row> 
                    <Col className="amount-select"> 
                        <button>$10</button>
                        <button>$20</button>
                        <button>$50</button>
                        <button>$100</button>
                    </Col>
                </Row>
                <Row>
                    <Col className="amount-enter">
                        <Form>
                            <Row>
                                <Form.Group as={Row} controlId="formGridAmount">
                                    <Form.Label column sm="4" className="other">Other: $</Form.Label>
                                    <Col>
                                        <Form.Control
                                            className="amount-field"
                                            type="amount"
                                            placeholder="0.00"
                                        />
                                    </Col>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <p className="form-titles"> Personal Information </p>
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
                            <Form.Group as={Col} controlId="formGridCard">
                            <Form.Label className="heading">Credit Card*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="cardnumber"
                                placeholder="Card Number"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label className="heading">Billing Address*</Form.Label>
                            <Form.Control
                                className="form-fields"
                                type="addressline1"
                                placeholder="Address 1*"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Control
                                className="form-fields"
                                type="addressline2"
                                placeholder="Address 2(Apt #, Suite, Floor, Etc.)"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control
                                className="form-fields"
                                type="city"
                                placeholder="City*"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Control
                                className="form-fields"
                                type="state"
                                placeholder="State/Province/Region*"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="form-labels">
                            <Form.Group as={Col} controlId="formGridZipCode">
                            <Form.Control
                                className="form-fields"
                                type="zipcode"
                                placeholder="Zip Code*"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Control
                                className="form-fields"
                                type="country"
                                placeholder="Country*"
                            />
                            </Form.Group>
                        </Row>

                        <Button
                            className="donate-button"
                            variant="primary"
                            type="submit"
                        >
                            DONATE
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Donations;