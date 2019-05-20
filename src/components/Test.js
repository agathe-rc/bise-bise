import React from 'react';
// Animation Components
import posed from 'react-pose';

const Box = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.5 }
});

class Test extends React.Component {
    state = { hovering: false }
    render() {
        return <Box className="box" 
            pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
    }
}

export default Test;