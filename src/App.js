import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Listings from './components/listings/listings.js';
import EachListing from './components/listings/eachListing.js';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/listings' exact component={Listings} />
                    <Route path='/listings/:id' component={EachListing}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
