import React from 'react';
import firebase from './firebase';
import Navibar from './navibar';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import './listings.css';

class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            filteredListings: [],
        };
    }

    componentDidMount() {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = db.collection('listings').get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => { this.setState({ listings: [...this.state.listings, doc],
                                                                filteredListings: [...this.state.filteredListings, doc] }); })
                })
                .catch((err) => {
                    console.log('Error getting documents', err);
                });
            console.log(data);
        }
        fetchData()
    }

    priceFilter(low, up) {
        var temp = [];
        this.setState({filteredListings: []});
        console.log(this.state.filteredListings)
        for (var i = 0; i < this.state.listings.length; i++) {
            if (this.state.listings[i].data().price >= low && this.state.listings[i].data().price <= up) {
                console.log(this.state.listings[i].data().address)
                temp.push(this.state.listings[i])
            }
            this.setState({filteredListings: temp})
        }
    }

    allListings() {
        this.setState({filteredListings: this.state.listings});
    }

    render() {
        return (
            <div>
                <Navibar />
                <div className="grid-container">
                    <h1>Sweetome Listings</h1>

                    <ButtonGroup>
                        <Button variant="orange" onClick={() => this.priceFilter(0, 1000)}>{"<"}$1000</Button>
                        <Button variant="orange" onClick={() => this.priceFilter(1001, 2000)}>$1000 - $2000</Button>
                        <Button variant="orange" onClick={() => this.priceFilter(2001, 100000)}>$2000+</Button>
                    </ButtonGroup>

                    <Button variant="orange" onClick={() => this.allListings()}>All Listings</Button>

                    {this.state.filteredListings.map(e => (
                        <div className="listings-box">
                            <div class="row no-gutters" style={{ textAlign: 'center' }}>
                                <div class="col-md-4">
                                    <img src={e.data().image} alt="house"></img>
                                </div>
                                <div class="col-md-8">
                                    <div className="listing-text-box">
                                        <h2><b>{e.data().address}</b></h2>
                                        <p>{e.data().bedroom} beds {e.data().bathroom} baths</p>
                                        <p>${e.data().price.toLocaleString()} / Month</p>
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