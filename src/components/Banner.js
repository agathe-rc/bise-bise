import React from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(props) {
    return (
        <Container className="banner">
            <Row>
                <Col>
                    <h1>{props.data.title}</h1>
                </Col>
                <Col>
                    <h2 className="text-left">{props.data.subtitle}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>{props.data.text}</h2>
                </Col>
            </Row>
        </Container>
    )
};

export default Banner;