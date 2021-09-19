import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import TourService from '../Services/TourService';
import { Link } from 'react-router-dom'



class DetailedTourInternational extends Component {

    constructor(props) {
        super(props);

        this.state = {

            tours: [],
            tour_type: 'International'
        }


    }

    componentDidMount() {
        TourService.getTourByType(this.state.tour_type).then((res) => {

            this.setState({ tours: res.data });
        });
    }

    bookTour(tour_id) {
        this.props.history.push(`/book-Tour/${tour_id}`);
    }


    render() {
        return (
            <div >
                <h1 className="headings">International tours</h1>
                <div className="grids">
                    <div className="grids">
                        {
                            this.state.tours.map(
                                tour =>

                                    <Card className="cardTours">
                                        <Card.Img variant="top" src={tour.img} />
                                        <Card.Body>
                                            <Card.Title>{tour.package_name}</Card.Title>
                                            <Card.Text>
                                                {tour.package_desc}
                                            </Card.Text>

                                        </Card.Body>
                                        <Card.Footer>
                                            <Link to={{
                                                pathname: "/iternary/",
                                                state: tour.tour_id
                                            }}>

                                                <Button variant="primary" >
                                                    Book Tour</Button>
                                            </Link>
                                        </Card.Footer>
                                    </Card>

                            )
                        }

                    </div>
                </div>

            </div>
        );
    }
}

export default DetailedTourInternational;