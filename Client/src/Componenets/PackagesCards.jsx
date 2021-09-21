import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import TourService from '../Services/TourService';


export default class PackagesCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tours: [],
            top_rated: "top"
        }
    }



    componentDidMount() {
        TourService.getTourByRating(this.state.top_rated).then((res) => {
            this.setState({ tours: res.data });
        });
    }


    render() {
        return (
            <div >
                 <h2 className="headings">Most Popular Destinations</h2>
                 <div className="grids">

                    {
                        this.state.tours.map(
                            tour =>
                                <Card className="cardTours">
                                    <Card.Img variant="top" src={tour.img} />
                                    <Card.Body>
                                        <Card.Title>{tour.package_name}</Card.Title>
                                        <Card.Text>{tour.package_desc}
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                    <Link to={{
                                            pathname: "/iternary/",
                                            state: tour.tour_id
                                        }}>

                                            <Button variant="primary" >
                                            View Tour</Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                        )
                    }



                </div>

            </div>
        )
    }
}