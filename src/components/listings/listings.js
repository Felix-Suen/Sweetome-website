import React from 'react';
import firebase from './firebase';

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
                    snapshot.forEach((doc) => {this.setState({listings: [...this.state.listings, doc]});})
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
                {this.state.listings.map(e => (
                    <li>{e.id}:  {e.data().address}, {e.data().agent}</li>
                ))}
            </div>
        );
    }
}

export default Listings;