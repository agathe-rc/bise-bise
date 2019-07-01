import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bullet from '../img/pictos/bullet.png';
import ear from '../img/pictos/ear.png';

export default class Services extends React.Component {
    render() {
        return (
            <Container id='services'>
                <Row>
                    <Col>
                        <h3>Nos services</h3>
                        <ul>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Conseil en stratégie de développement RH & formation</li>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Pilotage de projet</li>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Design pédagogique global (multimodal)</li>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Conception–Rédaction de kits pédagogiques</li>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Animation, coaching</li>
                            <li><img src={bullet} className='bullet' alt='bullet'/>Transfert de compétences, formation de formateurs</li>
                        </ul>
                        <img src={ear} className='picto' alt='ear'/>
                    </Col>
                </Row>
            </Container>
        );
    };
}