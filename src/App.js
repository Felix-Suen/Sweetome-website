import React from 'react';
import './App.css';
import Navibar from './components/navibar';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';

class App extends React.Component {
    render() {
        return(
            <div>
                <Navibar />
                <Intro />
                <About />
                <Contact />
            </div>
        );
    }
}

export default App;
