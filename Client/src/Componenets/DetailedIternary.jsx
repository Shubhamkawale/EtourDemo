import React, { Component } from 'react'
import TourService from '../Services/TourService'
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default class DetailedIternary extends Component {
    constructor(props) {
        super(props)
        console.log("props", this.props.location.state)
        this.state = {
            id: this.props.location.state,
            tour: {},
            iternary: {},
            
        }
    }

    componentDidMount() {
        TourService.getTourById(this.state.id).then((res) => {
            this.setState({ tour: res.data })
        })
        TourService.getIternaryById(this.state.id).then((res) => {
            this.setState({ iternary: res.data })
        })
    }

    render() {
        console.log(this.state.iternary)
        return (
            <div>
                <div>


                    <Card history={this.props.history}>
                        <Card.Img src={this.state.tour.img} />
                        <Card.Body>
                            { /*table tour*/}
                            <Card.Title>{this.state.tour.package_name}</Card.Title>
                            <Card.Text>
                                { /*table iternary*/}
                                {this.state.iternary.day1}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                            <Link to={{
                                pathname: "/booking/",
                                state: this.state.tour.tour_id
                            }}>

                                <Button variant="primary" >
                                    Book Tour</Button>
                            </Link>
                        </Card.Footer>


                    </Card>



                </div>

            </div>
        )
    }
}