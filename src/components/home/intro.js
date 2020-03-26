import React from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';
import carousel_1 from '../../images/carousel_1.jpg';
import carousel_2 from '../../images/carousel_2.jpg';
import carousel_3 from '../../images/carousel_3.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro" id="intro">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel_1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Link className="link" to="/listings"><Button  variant="orange">Explore All Listings</Button></Link>
                            <p>Personalized renting experience</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reso"
                            src={carousel_2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <Link className="link" to="/listings"><Button  variant="orange">Explore All Listings</Button></Link>
                            <p>Stress free ownership and management</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reso"
                            src={carousel_3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <Link className="link" to="/listings"><Button  variant="orange">Explore All Listings</Button></Link>
                            <p>Supervised by our trusted agents</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Intro;