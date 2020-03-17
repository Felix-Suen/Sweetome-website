import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Listings from './components/listings/listings.js';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/listings' component={Listings} />
                </Switch>
            </Router>
        );
    }
}

export default App;
