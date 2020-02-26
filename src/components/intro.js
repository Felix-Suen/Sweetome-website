import React from 'react';
import { Carousel } from 'react-bootstrap';
import './custom.css';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro" id="intro">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reso"
                            src="https://wallpapercave.com/wp/wp4183789.jpg"
                            alt="First slide"
                            style={{width:'100vw', height:'95vh'}}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reso"
                            src="https://images6.alphacoders.com/390/thumb-1920-390827.jpg"
                            alt="Third slide"
                            style={{width:'100vw', height:'95vh'}}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reso"
                            src="https://wifinowevents.s3.amazonaws.com/uploads/2018/01/CityofVancouver.jpg"
                            alt="Third slide"
                            style={{width:'100vw', height:'95vh'}}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Intro;