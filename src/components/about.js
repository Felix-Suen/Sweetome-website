import React from 'react';
import './custom.css';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <ScrollAnimation animateIn="fadeIn" animateOnce='true'>
                    <h1>Our Journey</h1>
                    <p>Stress free property management</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce='true'>
                    <div className="textbox">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </ScrollAnimation>
            </section>
        );
    }
}

export default About;