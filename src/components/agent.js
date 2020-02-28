import React from 'react';
import './custom.css';
import { Card, CardDeck } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Agent extends React.Component {
    render() {
        return (
            <div className="agent" id="agent">
                <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <h1>Our Trusted Agents</h1>
                </ScrollAnimation>
                <div className="container">
                    <ScrollAnimation animateIn="bounceInLeft" animateOnce='true' delay={500}>
                        <CardDeck className="card-deck">
                            <div className="row">
                                <div className="col-sm-4">
                                    <Card className="card">
                                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png" />
                                        <Card.Body style={{ background: '#ff6200' }}>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card className="card">
                                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png" />
                                        <Card.Body style={{ background: '#ff6200' }}>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-4">
                                    <Card className="card">
                                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png" />
                                        <Card.Body style={{ background: '#ff6200' }}>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </CardDeck>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Agent;