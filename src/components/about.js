import React from 'react';
import './custom.css';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <h1>Our Journey</h1><br />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce='true'>
                    <div className="textbox">
                        <div class="row no-gutters" style={{textAlign:'center'}}>
                            <div class="col-md-4">
                                <img src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="house"></img>
                            </div>
                            <div class="col-md-8">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <br />
                <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce='true'>
                    <div className="textbox">
                        <div class="row no-gutters">
                            <div class="col-md-8">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                            <div class="col-md-4">
                                <img src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="key"></img>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
        );
    }
}

export default About;