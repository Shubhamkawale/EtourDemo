import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Button } from "react-bootstrap"




class TourType extends Component {

    constructor(props) {
        super(props);

        this.state = { D: 'D', I: 'I'}
    
    }
    
   
    viewTour(tour_type){
        this.props.history.push(`/view-Tour/${tour_type}`);
    }
    

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
                        <Col sm={4}>
                            International text
                           
                                        <Button variant="primary" size="lg" active onClick={() => this.viewTour(this.state.I)} >     International button  </Button>
                                

                        </Col>
                    </Row>
                    <Row style={{ "margin-bottom": "50px" }}>

                        <Col sm={4}>Domestic Text

                            The above handles styling, But requires manually controlling the checked state for each radio or checkbox in the group.

                            For a nicer experience with checked state management use the  instead of a  component. The group behaves as a form component, where the value is an array of the selected values for a named checkbox group or the single toggled value in a similarly named radio group.

                            
                                        <Button variant="primary" size="lg" active onClick={() => this.viewTour(this.state.D)} >
                                            domestic button  </Button>
                            

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