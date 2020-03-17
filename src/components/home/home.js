import React from 'react';
import '../../App.css';
import Navibar from './navibar';
import Intro from './intro';
import About from './about';
import Contact from './contact';
import Agent from './agent';
import Footer from './footer';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navibar />
                <Intro />
                <About />
                <Agent />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;