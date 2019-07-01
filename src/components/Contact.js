import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: ''
        }
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ email: this.state.email, message: this.state.message });
        fetch('../mail.php', {
          method: 'POST',
          body: data
        }).then((response) => {
          if (response.ok) {
            this.setState({ success: true })
            console.log('success')
          }
        });
    }

    render() {
        return (
            <Container id='contact'>
                <Row>
                    <Col md={7}>
                        <h3>Contact</h3>
                        <p>Quam ob rem id primum videamus, si placet, quatenus amor in amicitia progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam arma illi cum Coriolano debuerunt?</p>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <Form.Group controlId="FormEmail">
                                <Form.Label>Votre email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="FormMessage">
                                <Form.Label>Votre message</Form.Label>
                                <Form.Control as="textarea" rows="2" />
                            </Form.Group>
                            <Button variant="light" type="submit" onClick={this.handleSubmit}>Envoyer</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    };
}