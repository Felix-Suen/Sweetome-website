import React from 'react';
import firebase from './firebase';
import Navibar from './navibar';

class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = db.collection('listings').get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => { this.setState({ listings: [...this.state.listings, doc] }); })
                })
                .catch((err) => {
                    console.log('Error getting documents', err);
                });
            console.log(data);
        }
        fetchData()
    }

    render() {
        return (
            <div>
                <Navibar />
                <div className="grid-container">
                {this.state.listings.map(e => (
                    <div className="about-box">
                        <div class="row no-gutters" style={{ textAlign: 'center' }}>
                            <div class="col-md-4">
                                <img src={e.data().image} alt="house"></img>
                            </div>
                            <div class="col-md-8">
                                <div className="textbox">
                                    <h1>{e.data().address}</h1>
                                    <p>{e.data().bedroom} beds | {e.data().bathroom} baths</p>
                                    <p>{e.data().price} / Month</p>
                                    <p>{e.data().description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Listings;