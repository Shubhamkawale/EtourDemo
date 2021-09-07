import React, { Component } from 'react';
import {  Card, Button } from 'react-bootstrap'
import TourService from '../Services/TourService';



class DetailedTourDomestic extends Component {

    constructor(props) {
        super(props);

        this.state = {

            tours: [],
            tour_type: 'Domestic'
        }


    }

    componentDidMount() {
        TourService.getTourByType(this.state.tour_type).then((res) => {

            this.setState({ tours: res.data });
        });
    }


    render() {
        return (
            <div >



                <h1>Domestic tours</h1>
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
                                        <Button variant="primary">Book Tour</Button>
                                    </Card.Body>
                                </Card>





                        )
                    }
                </div>




            </div>
        );
    }
}

export default DetailedTourDomestic;