import React, { Component } from 'react';
import { CardGroup, Card, Button, Image } from 'react-bootstrap'
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
            <div style={{ "margin": "90px" }}>



                <h1>Detailed tours</h1>
                <CardGroup>
                    {
                        this.state.tours.map(
                            tour =>
                                <Card style={{ width: '18rem' }}>
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
                </CardGroup>


               

            </div>
        );
    }
}

export default DetailedTourDomestic;