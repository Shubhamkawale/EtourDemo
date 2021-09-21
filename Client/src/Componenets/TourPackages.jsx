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
            <div >


                <div className="grids">
                    <Card className="cardTours">
                        <Card.Img variant="top" src="/Images/adven.jpeg" />
                        <Card.Body>
                            <Card.Title>Adventure Tours</Card.Title>
                            <Card.Text>Click below to see our best adventure tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Adventure"
                            }}>

                                <Button variant="primary" >
                                    Adventure</Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    <Card className="cardTours">
                        <Card.Img variant="top" src="/Images/family.jpeg" />
                        <Card.Body>
                            <Card.Title>Family Tours</Card.Title>
                            <Card.Text>Click below to see our best Family tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Family"
                            }}>

                                <Button variant="primary" >
                                    Family</Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    <Card className="cardTours">
                        <Card.Img variant="top" src="/Images/friends.jpeg" />
                        <Card.Body>
                            <Card.Title>Friend Tours</Card.Title>
                            <Card.Text>Click below to see our best Friend tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Friend"
                            }}>

                                <Button variant="primary" >
                                    Friend</Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    <Card className="cardTours">

                        <Card.Img variant="top" src="/Images/religious.jpeg" />
                        <Card.Body>
                            <Card.Title>Religious Tours</Card.Title>
                            <Card.Text>Click below to see our best Religious tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Religious"
                            }}>

                                <Button variant="primary" >
                                    Religious</Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    <Card className="cardTours">

                        <Card.Img variant="top" src="/Images/honeymoon.jpeg" />
                        <Card.Body>
                            <Card.Title>Honeymoon Tours</Card.Title>
                            <Card.Text>Click below to see our best Honeymoon tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Honeymoon"
                            }}>

                                <Button variant="primary" >
                                    Honeymoon </Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    <Card className="cardTours">
                        <Card.Img variant="top" src="/Images/corporate.jpeg" />
                        <Card.Body>
                            <Card.Title>Corporate Tours</Card.Title>
                            <Card.Text>Click below to see our best Corporate tours
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>
                            <Link to={{
                                pathname: "/Genre/",
                                state: "Corporate"
                            }}>

                                <Button variant="primary" >
                                    Corporate</Button>
                            </Link>
                        </Card.Footer>


                    </Card>

                </div>
            </div>

        )
    }
}
