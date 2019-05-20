import React from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
    return (
        <Container className={props.id}>
            <Row>
                <Col>
                    <div className="profile-img"></div>
                </Col>
                <Col>
                    <h1>{props.data.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.data.text.map((item,i) => <p key={i}>{item}</p>)}
                </Col>
            </Row>
        </Container>
    )
};

export default About;