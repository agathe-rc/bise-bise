import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import idea from '../img/pictos/idea.png';
import light from '../img/pictos/light.png';
import view from '../img/pictos/view.png';
import award from '../img/pictos/award.png';

export default class Approach extends React.Component {
    render() {
        console.log(this.props.content)
        return (
            <Container id='approach'>
                <Row>
                    <Col>
                        <p>Avec un esprit</p>
                        <h3>Malin & Ingénieux</h3>
                        <p>Nous avons développé un sens pratique hors-pair, un goût pour les combinaisons malines</p>
                        <p>Faire de la formation c’est bien, faire de la formation qui marche c’est mieux !</p>
                        <p>Nous cherchons constamment à faire des programmes simples et efficaces, en mixant modalités d’apprentissages, contenus et approches pédagogiques, toujours au service des objectifs opérationnels de votre organisation.</p>
                        <img src={idea} className='picto' alt='idea'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Dans la joie et l’optimisme</h3>
                        <p>Chez bise /bise, on déborde d’enthousiasme ! Nous diffusons cette énergie créative et inspirante dans chaque interaction, chaque intervention auprès de vos équipes. Insuffler la joie de vivre est au cœur de la réussite des parcours que nous concevons et animons. Nous combinons cette vivacité avec une grande écoute pour mieux nous adapter au rythme de vos besoins.</p>
                        <img src={light} className='picto' alt='light'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>En sortant des sentiers battus</h3>
                        <p>La curiosité est dans l’ADN de bise/bise. Nous cherchons pour chaque projet d’accompagnement un détour, une approche hors du commun. C’est aussi un état d’esprit que nous transmettons à vos équipes : Questionner ses pratiques, faire émerger et tester de nouvelles façons de faire, c’est pour nous le meilleur moyen de se former.</p>
                        <img src={view} className='picto' alt='view'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Avec le goût de l’excellence </h3>
                        <p>Nous aimons le beau geste ! Nous pensons que, comme pour un sportif professionnel ou un virtuose du piano, chaque détail compte pour atteindre l’excellence opérationnelle. Nous nous appliquons à soigner les programmes que nous confectionnons et que nous animons, tant dans le fond que dans la forme, nous allons parfois chercher la petite bête, mais c’est pour mieux vous faire avancer !</p>
                        <img src={award} className='picto' alt='award'/>
                    </Col>
                </Row>
            </Container>
        );
    };
}