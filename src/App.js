import React from 'react';
import './App.css';
import Navibar from './components/navibar';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';
import Agent from './components/agent';
import Footer from './components/footer';

class App extends React.Component {
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

export default App;
