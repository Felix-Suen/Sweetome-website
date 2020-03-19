import React from 'react';
import Navibar from './navibar';

class EachListing extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Navibar />
                <h1>hello</h1>
            </div>
            
        );
    }
}

export default EachListing;