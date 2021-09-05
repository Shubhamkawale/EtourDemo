import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'




export default class MyCaraousal extends Component {

   


    render() {
        return (
            <div >
                <Carousel fade >
                
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/paris.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/kashmir.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/sydney.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
