import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './custom.css';

class Navibar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" fixed="top">
                <Navbar.Brand><Link activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>Sweetome Rental</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>About</Link></Nav.Link>
                        <Nav.Link><Link activeClass="active"
                            to="agent"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Agents</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Contact Us</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navibar;