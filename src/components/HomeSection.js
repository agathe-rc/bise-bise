import React from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Animation Components
import posed from 'react-pose';

const SectionBox = posed.div({
    hoverable: true,
    init: {
        scale: 0.9,
        transition: { duration: 300 }
    },
    hover: {
        scale: 1,
        transition: { duration: 500 }
    },
});

export default class HomeSection extends React.Component {
    state = { 
        hovering: false,
    };
    hoveringBackground = () => {
        this.setState((prevState) => ({
            hovering: !prevState.hovering
        }));
    };
    render() {
        return (
            <SectionBox
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
            >
                <Container 
                    className={this.state.hovering ? "bg-txt section" : "bg-img section"}
                    id={this.props.id}
                    onClick={() => this.props.handleClickedPage(this.props.id)}
                >
                    <Row>
                        <Col>
                            <h1>{this.props.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col><p>{this.props.text}</p></Col>
                    </Row>
                </Container>
            </SectionBox>
        );
    };
};