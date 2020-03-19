import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link as Linker} from 'react-router-dom';
import Service from '../home/service';
import './listings.css';
import sweetome from '../../images/sweetome.png';

class Navibar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand>
                    <Linker to="/">    
                        <img
                            src={sweetome}
                            style={{width: '180px', height: '45px'}}
                            alt="logo"
                        />
                    </Linker></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='responsive-nav'>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Linker to="/listings" style={{ color: '#ef8319' }}>All Listings</Linker>
                        </Nav.Link>
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