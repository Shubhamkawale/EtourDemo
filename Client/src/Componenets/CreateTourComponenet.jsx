import React, { Component } from 'react';
import TourService from '../Services/TourService';

class CreateTourComponenet extends Component {

    constructor(props) {
        super(props);

        this.state = {

            //properties
            tour_id: "",
            package_name: "",
            tour_location: "",
            package_cost: ""

        }

        //binding evethandler with constructor
        this.changeTourIdHandler = this.changeTourIdHandler.bind(this);
        this.changePackageNameHandler = this.changePackageNameHandler.bind(this);
        this.changeTourLocationHandler = this.changeTourLocationHandler.bind(this);
        this.saveTour = this.saveTour.bind(this);
        this.cancel = this.cancel.bind(this);


    }

    //event handler for tour_id
    changeTourIdHandler = (event) => {
        this.setState({ tour_id: event.target.value });
    }

    //event handler for package_name
    changePackageNameHandler = (event) => {
        this.setState({ package_name: event.target.value });
    }

    //event handler for tour_location
    changeTourLocationHandler = (event) => {
        this.setState({ tour_location: event.target.value });
    }



    saveTour = (e) => {
        e.preventDefault();
        //get data from properties 
        let tour = { tour_id: this.state.tour_id, package_name: this.state.package_name, tour_location: this.state.tour_location };
        console.log('tour => ' + JSON.stringify(tour));


        //call to rest api and redirect to tours page
        TourService.createTour(tour).then(res => {
            this.props.history.push('/tours');
        });

    }

    cancel() {
        this.props.history.push('/tours');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Tour</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Tour ID : </label>
                                        <input placeholder="Tour ID" name="tour_id" className="form-control"
                                            value={this.state.tour_id} onChange={this.changeTourIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Package Name : </label>
                                        <input placeholder="Package Name" name="package_name" className="form-control"
                                            value={this.state.package_name} onChange={this.changePackageNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Tour Location : </label>
                                        <input placeholder="Tour Location" name="tour_location" className="form-control"
                                            value={this.state.tour_location} onChange={this.changeTourLocationHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveTour} style={{ marginLeft: "170px" }}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateTourComponenet;