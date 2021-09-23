import React, { Component } from 'react';
import TourService from '../Services/TourService';

class ListToursComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tours: []
        }

        this.addTour = this.addTour.bind(this);

    }

    //add tour
    addTour() {
        this.props.history.push('/admin/add-tour');
    }

    //rest api call
    componentDidMount() {
        TourService.getTours().then((res) => {
            this.setState({ tours: res.data });
        });
    }

    render() {
        return (
            <div style={{"width":"1200px","margin-left":"60px"}}>
                <h2 className="text-center">Tours List</h2>
                <br></br>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTour}> Add Tour</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Package Name</th>
                                <th> Tour Location</th>
                                <th> Package Cost </th>
                                <th> Number of traveller </th>
                                <th> Start Date </th>
                                <th> End Date </th>
                                <th> No Of Seats Booked </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tours.map(
                                    tour =>
                                        <tr key={tour.tour_id}>
                                            <td>{tour.package_name}</td>
                                            <td>{tour.tour_location}</td>
                                            <td>{tour.package_cost}</td>
                                            <td>{tour.no_of_travellers}</td>
                                            <td>{tour.start_date}</td>
                                            <td>{tour.end_date}</td>
                                            <td>{tour.filled_seats}</td>

                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>


            
            
        );
    }
}

export default ListToursComponent;