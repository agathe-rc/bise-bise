import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import diamond from '../img/pictos/diamond.png'


export default class Home extends React.Component {

    render() {
        return (
            <Container id='home'>
                <Row>
                    <Col>
                    <p>Savoir faire du</p>
                    <h3>Business</h3>
                    <p>avec le</p>
                    <h3>Coeur</h3>
                    <p>C'est pas évident...</p>
                    <p>bise/bise vous conseille, vous accompagne & vous entraîne !</p>
                    <img src={diamond} className='picto' alt='diamond'/>
                    </Col>
                </Row>
            </Container>
        );
    };
};
