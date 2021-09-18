import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'




class TourType extends Component {


    render() {
        return (
            <div>
                <Container>

                    <Row style={{ "margin-bottom": "50px" }}>
                        <Col sm={8}>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="/Images/I1.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block w-100"
                                        src="/Images/I2.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/Images/I3.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>


                        </Col>
                        
                        <Col sm={4} >
                            <span class="align-middle">
                            <br/><br/><br/><br/><br/><br/>

                            Everyone dreams of having an international vacation once in their lifetime, be it with family or friends.
                            Nothing can be better than looking at the world in a different way with our tour packages for various countries around the globe.
                            Visiting a foreign land lets you experience and explore different culture, tradition and get to know the locals better.
                            If you are someone who is looking to have an eternal memory, then pay a visit to any of the foreign lands with tour packages.
                            </span>
                            <br/><br/>  
                            <Link to={{ pathname: "/view-Tour/I" }} >

                                <Button variant="primary" size="lg" active style={{"height":"50px"}}>     View Tours...  </Button>
                            </Link>

                        </Col>
                    </Row>
                    <Row style={{ "margin-bottom": "50px" }}>

                        <Col sm={4}>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                            
                            If it is domestically you plan to travel, you will find innumerable holiday packages,
                            but very few that match your requirement, or for that matter your interests and personality.
                            From our website and you can now choose from an array of holiday packages in India that span
                            across the length and breadth of the country, taking you into breathtaking tea estates, hill
                            resorts to splendid backwater retreats.
                            <br/><br/>

                            <Link to={{ pathname: "/view-Tour/D" }} >
                                <Button variant="primary" size="lg" active style={{"height":"50px"}}>
                                    domestic button  </Button>
                            </Link>

                        </Col>
                        <Col sm={8}> <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="/Images/D1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="/Images/D2.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/D3.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default TourType;