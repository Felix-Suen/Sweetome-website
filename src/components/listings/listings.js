import React from 'react';
import firebase from './firebase';
import { Link } from 'react-router-dom';

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
            <ul>
                {this.state.listings.map(e => (
                    <li>
                        <Link to={`/listings/${e.id}`}>{e.data().address}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Listings;