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
                            <p>Awaken To A Different World Log out from the busy life</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/kashmir.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <p>Beyond Words Just Feel it!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/sydney.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <p>Call It A Dream And if you can dream it, You can do it!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ "height": "400px" }}
                            src="/Images/travel.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Come To Life Because You have only one!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
