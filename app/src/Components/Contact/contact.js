import styles from "./contact.css";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

function contact() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="fname" placeholder="John" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lname" placeholder="Smith" />
        </Form.Group>
      </Row>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="messagearea" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave your message here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check this box" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default contact;
