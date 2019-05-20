import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/logo.svg';
// Smooth scroll
import Scroll from 'react-scroll'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="bise-bise logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            {/*
                <Nav.Item>
                    <Scroll.Link activeClass="active" to="approach">Notre approche</Scroll.Link>
                </Nav.Item>
            */}
                <Nav.Link href="/home#approach">Notre approche</Nav.Link>
                <Nav.Link href="/home#services">Nos services</Nav.Link>
                <Nav.Link href="/home#works">Réalisations</Nav.Link>
                <Nav.Link href="/home#about">Qui sommes-nous ?</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
