import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import MyCaraousal from './MyCaraousal';
import PackagesCard from './PackagesCards';
import TourType from './TourType';



class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = { D: 'D', I: 'I' }

    }


    viewTour(tour_type) {
        this.props.history.push(`/view-Tour/${tour_type}`);
    }


    render() {
        return (
            <div>
                
                <MyCaraousal />

                <div style={{ "margin": "50px 140px" }}>
                    <h2 >See Our Best Popular Destinations</h2>
                    <CardGroup>

                        <PackagesCard id={105} />
                        <p>&nbsp;&nbsp;</p>
                        <PackagesCard id={107} />
                        <p>&nbsp;&nbsp;</p>
                        <PackagesCard id={202} />
                    </CardGroup>
                    <p>&nbsp;&nbsp;</p>
                    <CardGroup>
                        <PackagesCard id={107} />
                        <p>&nbsp;&nbsp;</p>
                        <PackagesCard id={202} />
                        <p>&nbsp;&nbsp;</p>
                        <PackagesCard id={202} />

                    </CardGroup>
                </div>
                <TourType/>

            </div>
        );
    }
}

export default HomePage;