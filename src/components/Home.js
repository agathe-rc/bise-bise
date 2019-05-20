import React from 'react';
import Banner from './Banner';
import HomeSection from './HomeSection';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner data={this.props.dataBanner}/>
                {this.props.data.map((section, i) => (
                    <HomeSection 
                        key={i.toString()}
                        title={section.title}
                        text={section.text}
                        name={section.id}
                        handleClickedPage={this.props.handleClickedPage}
                    />
                ))}
            </div>
        );
    };
};
