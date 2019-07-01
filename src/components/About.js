import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../img/profile.jpeg'
import posed from 'react-pose';

const Box = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

export default class About extends React.Component {
    state = { 
        hoveringOne: false,
        hoveringTwo: false 
    }

    render() {
        return (
            <Container id='about'>
                <Row>
                    <Col>
                        <h3>C'est qui ?</h3>
                        <p>Après plus de 15 ans passés au sein de grands groupes (Sephora, Etam, Galeries Lafayette) sur des postes de management opérationnel et à la formation, Delphine crée en 2017 l’agence de conseil bise/bise.</p>
                        <p>Spécialisée dans le développement des talents et dans l’accompagnement des projets transformation, Delphine privilégie des approches toujours simples et efficaces.</p>
                        <p>Passionnée de musique, d’arts, de sciences, de philosophie, elle aborde chaque nouveau projet comme une tête chercheuse, afin de vous apporter des solutions toujours plus pertinentes.</p>
                    </Col>
                </Row>
                <Row className="mt-4 ml-4">
                    <Col>
                        <Box id="circle-red"
                            pose={this.state.hoveringOne ? "hovered" : "idle"}
                            onMouseEnter={() => this.setState({ hoveringOne: true })}
                            onMouseLeave={() => this.setState({ hoveringOne: false })}
                        />
                        <Box id="circle-black"
                            pose={this.state.hoveringTwo ? "hovered" : "idle"}
                            onMouseEnter={() => this.setState({ hoveringTwo: true })}
                            onMouseLeave={() => this.setState({ hoveringTwo: false })}
                        />
                        <img src={profile} alt="profile"/>
                    </Col>
                </Row>

            </Container>
        );
    };
}