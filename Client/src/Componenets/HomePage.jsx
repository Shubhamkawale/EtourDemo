import React, { Component } from 'react';
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

                
                    <h2 >See Our Best Popular Destinations</h2>
                    <div className="grids">

                        <PackagesCard/>
                    </div>
                
                <TourType/>

            </div>
        );
    }
}

export default HomePage;