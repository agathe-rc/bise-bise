import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eye from '../img/pictos/eye.png';
import arm from '../img/pictos/arm.png';

export default class Vision extends React.Component {
    render() {
        return (
            <Container id='vision'>
                <Row>
                    <Col>
                        <p>Nous, on fait</p>
                        <h3>Le pari de l'humain</h3>
                        <p>On a choisi d’accompagner les entreprises, associations, marques, qui pensent que réussir durablement nécessite de libérer le pouvoir d’agir et de renarmr le savoir-être des femmes et des hommes. Entrepreneur.e, manager.e, chef.fe de projet, commercial.e,</p>
                        <p>leurs succès reposent évidemment sur leur expertise technique, mais aussi et surtout sur des compétences comportementales.</p>
                        <img src={eye} className='picto' alt='eye'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Savoir clairement formuler ses attentes et ses objectifs,
                        donner et recevoir du feedback de facon constructive, écouter activement, entretenir sa motivation, gérer ses émotions et le stress, appréhender la complexité, s’adapter sans perdre de vue son cap,faire adhérer à ses projets...</p>
                        <p>Bref, développer ses soft-skills est pour nous le meilleur moyen entretenir sa motivation, gérer ses émotions et le stress, appréhender la complexité, s’adapter sans perdre de vue son cap,faire adhérer à ses projets...</p>
                        <p>entretenir sa motivation, gérer ses émotions et le stress, appréhender la complexité, s’adapter sans perdre de vue son cap,faire adhérer à ses projets...</p>
                        <p>Bref, développer ses soft-skills est pour nous le meilleur moyen de se préparer face à la complexité des défis actuels.</p>
                        <p>Alors chez bise/bise,</p>
                        <p>nous créons des programmes de formation sur mesure afin de</p>
                        <h3>muscler et assouplir</h3>
                        <p>toutes ces compétences</p>
                        <img src={arm} className='picto' alt='arm'/>
                    </Col>
                </Row>
            </Container>
        );
    };
}