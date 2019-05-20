import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Approach from './components/Approach';
import Works from './components/Works';
import Services from './components/Services';
import Footer from './components/Footer';
import './style/App.css';
import './index.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {currentPage: 'home'}
  }
  // Change current page component state onClick
  handleClickedPage = (pageToGoTo) => {
    this.setState(() => ({currentPage: pageToGoTo}));
  }
  // Get component according to state
  componentToRender() {
      switch (this.state.currentPage) {
          case 'home': return <Home 
              data={this.props.content.home}
              dataBanner={this.props.content.banner}
              handleClickedPage={this.handleClickedPage}
            />
          case 'about' : return <About
              id={this.state.currentPage}
              data={this.props.content.about}
              handleClickedPage={this.handleClickedPage}
            />
          case 'works' : return <Works
            data={this.props.content.works}
            handleClickedPage={this.handleClickedPage}
            />
          case 'approach' : return <Approach
            data={this.props.content.approach}
            handleClickedPage={this.handleClickedPage}
            />
          case 'services' : return <Services
              data={this.props.content.services}
              handleClickedPage={this.handleClickedPage}
            />
      }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.componentToRender()}
        <Footer />
      </div>
    );
  };
};
