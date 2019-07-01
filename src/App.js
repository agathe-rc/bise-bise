import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Route} from "react-router-dom";
// Header :
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './img/logo.png';

// Pages :
import Home from './components/Home';
import Content from './components/Content';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {currentPage: window.location.pathname}
  }

  handleNavPosition = () => {
    this.setState({currentPage: window.location.pathname})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar expand="lg" className={this.state.currentPage === '/' ? 'fixed-bottom' : 'fixed-top'}>
              <Navbar.Brand href="/">
                  <img
                      src={logo}
                      className="logo"
                      alt="bise-bise logo"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" onClick={this.handleNavPosition}>
                    <NavLink className='navlink' exact to="/home#vision" smooth activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Vision</NavLink>

                    <NavLink className='navlink' exact to="/home#approach" smooth activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Approche</NavLink>

                    <NavLink className='navlink' exact to="/home#services" smooth activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Services</NavLink>

                    <NavLink className='navlink' exact to="/home#about" smooth activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Qui ?</NavLink>
                    
                    <NavLink className='navlink' exact to="/home#contact" smooth activeClassName="selected" location={{pathname: document.location.pathname + document.location.hash}}>Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Route
            exact path='/'
            render={(props) => <Home {...props} />}
          />
          <Route
            path='/home'
            render={(props) => <Content {...props} />}
          />
        </Router>
      </div>
    );
  };
};
