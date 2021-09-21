import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class TourPackages extends Component {


    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h2 className="headings">Our Packages</h2>

                <div className="grids">


                    <div className="grids">

                        <Link to={{
                            pathname: "/Genre/",
                            state: "Adventure"
                        }} class="disabled-link">
                            <Card className="cardTours">
                                <Card.Img variant="top" src="/Images/adven.jpeg" />
                                <Card.Body>
                                    <Card.Title>Adventure Tours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to={{
                            pathname: "/Genre/",
                            state: "Family"
                        }} class="disabled-link">
                            <Card className="cardTours">
                                <Card.Img variant="top" src="/Images/family.jpeg" />
                                <Card.Body>
                                    <Card.Title>Family Tours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to={{
                            pathname: "/Genre/",
                            state: "Friends"
                        }} class="disabled-link">
                            <Card className="cardTours">
                                <Card.Img variant="top" src="/Images/friends.jpeg" style={{ "height": "170px" }} />
                                <Card.Body>
                                    <Card.Title>Friend Tours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link to={{
                            pathname: "/Genre/",
                            state: "Religious"
                        }} class="disabled-link">
                            <Card className="cardTours">
                                <Card.Img variant="top" src="/Images/religious.jpeg" />
                                <Card.Body>
                                    <Card.Title>Religious Tours</Card.Title>
                                </Card.Body>
                            </Card>

                        </Link>
                        <Link to={{
                            pathname: "/Genre/",
                            state: "Honeymoon"
                        }} class="disabled-link">
                            <Card className="cardTours">

                                <Card.Img variant="top" src="/Images/honeymoon.jpeg" style={{ "height": "160px" }} />
                                <Card.Body>
                                    <Card.Title>Honeymoon Tours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link to={{
                            pathname: "/Genre/",
                            state: "Corporate"
                        }} class="disabled-link">
                            <Card className="cardTours">
                                <Card.Img variant="top" src="/Images/corporate.jpeg" style={{ "height": "160px" }} />
                                <Card.Body>
                                    <Card.Title>Corporate Tours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}
