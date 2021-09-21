import React, { Component } from 'react'
import TourService from '../Services/TourService'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class SearchByPrice extends Component {
    constructor(props) {
        super(props)
        console.log("first",this.props.location.state.first)
        console.log("second",this.props.location.state.last)
    
        this.state = {
            initial: this.props.location.state.first,
            final: this.props.location.state.last,
            tours: []
             
        }
    }
    componentDidMount(){
        TourService.getTourByCost(this.state.initial, this.state.final).then((res)=>{
            this.setState({tours: res.data})
        })
    }
    
    render() {
        return (
            <div>
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
                                        <Card.Text>
                                            Tour Cost - {tour.package_cost} Rs.
                                        </Card.Text>
                                       
                                    </Card.Body>
                                    <Card.Footer>
                                    <Link to={{
                                            pathname: "/iternary/",
                                            state: tour.tour_id
                                        }}>
                                            <Button variant="primary"  >
                                            View Tour</Button>
                                        </Link>
                                    </Card.Footer>
                                </Card>





                        )
                    }
                    </div>
                    </div>
            </div>
        )
    }
}
