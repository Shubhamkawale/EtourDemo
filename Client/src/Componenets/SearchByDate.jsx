import React, { Component } from 'react'
import TourService from '../Services/TourService'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class SearchByDate extends Component {

    constructor(props) {
        super(props)
    console.log("props", this.props.location.state.start)
    console.log("props", this.props.location.state.end)
        this.state = {
             first: new Date(this.props.location.state.start).toISOString().slice(0,10),
             second: new Date(this.props.location.state.end).toISOString().slice(0,10),
             tours:[]
        }
    }
    componentDidMount(){
        TourService.getTourByDate(this.state.first, this.state.second).then((res)=>{
            this.setState({tours:res.data})
        })
    }
    render() {
        console.log("date", this.state.first)
        console.log(typeof(this.state.first))
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
                                        <Card.Text>Start date -
                                            {tour.start_date}
                                        </Card.Text>
                                        <Card.Text>
                                        End date - {tour.end_date}
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
