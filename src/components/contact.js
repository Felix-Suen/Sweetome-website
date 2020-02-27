import React from 'react';
import './custom.css';
import Map from './map';

class Contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                <h1>Contact Us</h1>
                <p>phone number: 666-666-6666</p>
                <div className="map">
                    <div className="center">
                        <Map />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;