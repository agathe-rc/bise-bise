import React from 'react';
import Vision from './Vision';
import Approach from './Approach';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default class Content extends React.Component {
    render() {
        return (
            <div id='content'>
                <Vision />
                <Approach />
                <Services />
                <About />
                <Contact />
            </div>
        );
    };
};