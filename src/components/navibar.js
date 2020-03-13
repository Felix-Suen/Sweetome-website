import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-scroll";
import Service from './service';
import './custom.css';
import sweetome from '../images/sweetome.png';

class Navibar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand><Link activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    style={{ color: '#ef8319' }}>
                        <img
                            src={sweetome}
                            style={{width: '180px', height: '45px'}}
                            alt="logo"
                        />
                    </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='responsive-nav'>
                    <Nav className="mr-auto">
                        <Nav.Link><Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            style={{ color: '#ef8319' }}>About</Link></Nav.Link>
                        <Nav.Link><Link activeClass="active"
                            to="agent"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            style={{ color: '#ef8319' }}>Agents</Link></Nav.Link>
                        <Nav.Link><Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            style={{ color: '#ef8319' }}>Contact Us</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button
                            variant="orange"
                            onClick={() => this.setState({ modalShow: true })}
                        >
                            Service Request
                        </Button>

                        <Service
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navibar;