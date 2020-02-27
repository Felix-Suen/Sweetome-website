import React from 'react';
import './custom.css';
import { Card, CardGroup } from 'react-bootstrap';

class Agent extends React.Component {
    render() {
        return (
            <div className="agent" id="agent">
                <h1>Our Agents</h1><br />
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png"/>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default Agent;