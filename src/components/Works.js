import React from 'react';
// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
// Animation Components
import posed from 'react-pose';

const WorkBox = posed.div({
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

export default class Works extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            hovering: false,
            modalShow: false,
        };
    }
  
    handleShow = () => {
        this.setState({ modalShow: true });
    };

    handleHide = () => {
        this.setState({ modalShow: false });
    };

    hoveringBackground = () => {
        this.setState((prevState) => ({
            hovering: !prevState.hovering
        }));
    };

    render() {
        const worksData = this.props.data;
        return (
            <Container>
                <Row>
                    <Col><h1>Réalisations</h1></Col>
                </Row>
                <Row>
                    {worksData.map((item, i) => (
                        <Col lg="6" xs="6" key={i}>
                            <WorkBox
                                pose={this.state.hovering ? "hovered" : "idle"}
                                onMouseEnter={() => this.setState({ hovering: true })}
                                onMouseLeave={() => this.setState({ hovering: false })}
                                className="work-box"
                                onClick={() => this.setState({ modalShow : true })}
                            >
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                                <Modal
                                    show={this.state.modalShow}
                                    onHide={this.handleHide}
                                    dialogClassName="modal-90w"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            {item.title}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>{item.content}</p>
                                    </Modal.Body>
                                </Modal>
                            </WorkBox>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }; 
};