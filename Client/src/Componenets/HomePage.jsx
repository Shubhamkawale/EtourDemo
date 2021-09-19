import React, { Component } from 'react';
import MyCaraousal from './MyCaraousal';
import PackagesCard from './PackagesCards';
import TourType from './TourType';



class HomePage extends Component {

    render() {
        return (
            <div>
                <MyCaraousal />
                <div className="grids">
                <PackagesCard />
                </div>
                
                <TourType />
            </div>
        );
    }
}

export default HomePage;