import React from 'react';
import './custom.css';
import Map from './map';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact" id="contact">
                <h1>Contact Us</h1>
                <div className="map">
                    <div className="center">
                        <Map />
                    </div>
                </div>
                <div className='contact-info'>
                    <p>604-233-0508</p>
                    <p><a>sweetomevancouver@gmail.com</a></p>
                    <p>Unit 218 - 2688 Shell Road, Richmond, BC</p>
                </div>
            </div>
        );
    }
}

export default Contact;