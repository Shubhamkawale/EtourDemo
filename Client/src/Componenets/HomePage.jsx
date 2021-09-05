import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import MyCaraousal from './MyCaraousal';
import PackagesCard from './PackagesCards';
import TourType from './TourType';

class HomePage extends Component {



    render() {
        return (
            <div>

                <MyCaraousal />

                <div style={{ "margin": "50px 140px" }}>
                    <h3 >Top Tours</h3>
                    <CardGroup>

                        <PackagesCard id={105} />
                        <p></p>
                        <PackagesCard id={107} />
                        <p></p>
                        <PackagesCard id={202} />

                    </CardGroup>
                </div>
                <TourType />
               
            </div>
        );
    }
}

export default HomePage;