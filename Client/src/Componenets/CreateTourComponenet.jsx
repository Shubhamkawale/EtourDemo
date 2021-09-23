import React, { Component } from 'react';
import TourService from '../Services/TourService';

class CreateTourComponenet extends Component {

    constructor(props) {
        super(props);

        this.state = {

            //properties
            tour_id: "",
            no_of_traveller: '',
            package_cost: "",
            package_desc: '',
            package_name: "",
            package_type: "",
            tour_location: "",
            tour_type: "",
            top_rated: "",
            tour_span: "",
        }
        //binding evethandler with constructor
        this.changeTourIdHandler = this.changeTourIdHandler.bind(this);
        this.changeNoOfPassengerHandler = this.changeNoOfPassengerHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changePackageDescHandler = this.changePackageDescHandler.bind(this);
        this.changePackageNameHandler = this.changePackageNameHandler.bind(this);
        this.changePackageTypeHandler = this.changePackageTypeHandler.bind(this);
        this.changeTourLocationHandler = this.changeTourLocationHandler.bind(this);
        this.changeTourTypeHandler = this.changeTourTypeHandler.bind(this);
        this.changeTopRatedHandler = this.changeTopRatedHandler.bind(this);
        this.changeTourSpanHandler = this.changeTourSpanHandler.bind(this);
        this.saveTour = this.saveTour.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeTourSpanHandler = (event) => {
        this.setState({ tour_span: event.target.value });
    }

    changeTopRatedHandler = (event) => {
        this.setState({ top_rated: event.target.value });
    }

    changeTourTypeHandler = (event) => {
        this.setState({ tour_type: event.target.value });
    }

    changeCostHandler = (event) => {
        this.setState({ package_cost: event.target.value });
    }

    changeNoOfPassengerHandler = (event) => {
        this.setState({ no_of_traveller: event.target.value });
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
    changePackageTypeHandler = (event) => {
        this.setState({ package_type: event.target.value });
    }

    changePackageDescHandler = (event) => {
        this.setState({ package_desc: event.target.value });
    }




    saveTour = (e) => {
        e.preventDefault();
        //get data from properties 


        let tour = {
            tour_id: this.state.tour_id,
            no_of_traveller: this.state.tour_id,
            package_cost:this.state.package_cost,
            package_desc: this.state.package_desc,
            package_name: this.state.package_name,
            package_type: this.state.package_type,
            tour_location: this.state.tour_location,
            tour_type: this.state.tour_type, 
            top_rated: this.state.top_rated,
            tour_span: this.state.tour_span,
        };
        console.log('tour => ' + JSON.stringify(tour));



        //call to rest api and redirect to tours page
        TourService.createTour(tour).then(res => {

            alert("Tour added.... ")
            this.props.history.push("/tourlist")
        })



    }

    cancel() {
        this.props.history.push('/tourlist');
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
                                        <input type="number" placeholder="Tour ID" name="tour_id" className="form-control"
                                            value={this.state.tour_id} onChange={this.changeTourIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Travelling Capacity : </label>
                                        <input type="number" placeholder="No Of passengers" name="no_of_passenger" className="form-control"
                                            value={this.state.no_of_passenger} onChange={this.changeNoOfPassengerHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Package Cost : </label>
                                        <input type="number" placeholder="Cost" name="package_cost" className="form-control"
                                            value={this.state.package_cost} onChange={this.changeCostHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Package Name : </label>
                                        <input placeholder="Package Name" name="package_name" className="form-control"
                                            value={this.state.package_name} onChange={this.changePackageNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Package Type : </label>
                                        <input placeholder="Package Type" name="package_type" className="form-control"
                                            value={this.state.package_type} onChange={this.changePackageTypeHandler} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label> Tour Location : </label>
                                        <input placeholder="Tour Location" name="tour_location" className="form-control"
                                            value={this.state.tour_location} onChange={this.changeTourLocationHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Tour Type : </label>
                                        <input placeholder="Tour Type" name="tour_type" className="form-control"
                                            value={this.state.tour_type} onChange={this.changeTourTypeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Package Discription : </label>
                                        <input placeholder="Package Description" name="package_desc" className="form-control"
                                            value={this.state.package_desc} onChange={this.changePackageDescHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Top Rated : </label>
                                        <input placeholder="Enter Top for top rating tour" name="top_rated" className="form-control"
                                            value={this.state.top_rated} onChange={this.changeTopRatedHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Duration of tour : </label>
                                        <input type="number" placeholder="Enter Top for top rating tour" name="tour_span" className="form-control"
                                            value={this.state.tour_span} onChange={this.changeTourSpanHandler} />
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