import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={7}>
                        <h3>Contact</h3>
                        <p>Quam ob rem id primum videamus, si placet, quatenus amor in amicitia progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam arma illi cum Coriolano debuerunt?</p>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <Form.Group controlId="FormMessage">
                                <Form.Label>Votre message</Form.Label>
                                <Form.Control as="textarea" rows="2" />
                            </Form.Group>
                            <Form.Group controlId="FormEmail">
                                <Form.Label>Votre email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Button variant="light" type="submit">Envoyer</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;