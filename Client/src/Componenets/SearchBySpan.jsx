import React, { Component } from 'react'
import TourService from '../Services/TourService'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class SearchBySpan extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            span: this.props.location.state,
            tours: [] 
        }
    }
    componentDidMount(){
        TourService.getTourBySpan(this.state.span).then((res)=>{
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
                                           Tour Duration - {tour.tour_span} days.
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
