import React, { Component } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import TourService from '../Services/TourService'
import { Redirect } from 'react-router';





export default class BookingForm extends Component {


    constructor(props) {
        super(props);

        const token = localStorage.getItem("token")

        let loggedin = true;
        if (token == null) {
            loggedin = false;
        }


        this.state = {
            id: this.props.location.state,
            pid: this.props.match.params.pid,
            pname: '',
            email: '',
            phoneno: '',
            age: '',
            address: '',
            tour: {},
            no_of_passenger: 0,
            cost: 0,
            finalcost: "",
            loggedin

        }




        this.savePassenger = this.savePassenger.bind(this);
        this.changepName = this.changepName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhoneno = this.changePhoneno.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeUid = this.changeUid.bind(this);
        this.changeNoOfPassenger = this.changeNoOfPassenger.bind(this);
    }



    componentDidMount() {


        TourService.getTourById(this.state.id).then((res) => {
            this.setState({ tour: res.data })
        })
    }

    //add new passanger
    savePassenger = async (e) => {
        e.preventDefault();

        let passenger = { pname: this.state.pname, email: this.state.email, phoneno: this.state.phoneno, age: this.state.age, address: this.state.address, uid: this.state.uid, booking_id: this.state.booking_id };

        console.log('passenger => ' + JSON.stringify(passenger));

        await this.setState({ no_of_passenger: this.state.no_of_passenger + 1 });

        await this.setState({ cost: this.state.tour.package_cost * (this.state.no_of_passenger) })

        console.log("AA ", this.state.cost)

        TourService.addPassenger(passenger).then(res => {
            console.log("this is a tour", this.state.tour);
        });

    }

    //book tour
    changeNoOfPassenger = (event) => {

        let book = {
            cost: this.state.cost,
            user_id: 1,
            tid: this.props.location.state,
            no_of_passenger: this.state.no_of_passenger,
            tour_id: this.state.tour.tour_id

        }

        TourService.bookTour(book).then(res => {
            console.log("this is booking table", book)
        })
        this.props.history.push('/invoice');
    }

    changepName = (event) => {
        this.setState({ pname: event.target.value });
    }
    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    changePhoneno = (event) => {
        this.setState({ phoneno: event.target.value });
    }
    changeAge = (event) => {
        this.setState({ age: event.target.value });
    }
    changeAddress = (event) => {
        this.setState({ address: event.target.value });
    }
    changeUid = (event) => {
        this.setState({ uid: event.target.value });
    }

    add = (e) => {
        this.setState({
            pname: '',
            email: '',
            phoneno: '',
            age: '',
            address: ''
        });

    }

    render() {
        if (this.state.loggedin == false) {
            alert("Please login to book a tour...")
            return <Redirect to="/" />
        }
        else {

            return (
                <div >
                    <section className="container col-6">
                        <h2>Tour Details...</h2>
                        <div className="form-floating">
                            <tr>
                                <td className=" form-floating col-3" >
                                    <input class="form-control" value={this.state.tour.package_name} disabled />
                                    <label htmlFor="package_Name">Package Name</label>

                                </td>
                                <td className="form-floating col-3" >
                                    <input class="form-control" disabled value={this.state.tour.tour_location} />
                                    <label htmlFor="package_loc">Package Location</label>
                                </td>
                            </tr>
                        </div>
                        <div>
                            <tr>
                                <td className="form-floating col-2" >
                                    <input class="form-control" value={this.state.tour.tour_span} disabled />
                                    <label htmlFor="package_Duration">Package Duration</label>
                                </td>
                                <td className="form-floating col-2" >
                                    <input name="package_Cost" class="form-control" value={this.state.cost} disabled />
                                    <label htmlFor="package_Cost">Package Cost</label>
                                </td>
                                <td className=" form-floating col-2" >
                                    <input name="no_of_passenger" class="form-control" required value={this.state.no_of_passenger} disabled />
                                    <label htmlFor="no_of_passenger">Number of passenger</label>
                                </td>
                            </tr>
                        </div>
                    </section>

                    <form >
                        <div style={{ "marginBottom": "100px" }}>


                            <section>
                                <h2>Enter Passenger Details...</h2>
                                <div className="container col-6">
                                    <div className="form-floating ">
                                        <input name="pname" class="form-control" value={this.state.pname} onChange={this.changepName} required pattern="[a-zA-Z]{8,50}" />
                                        <label for="floatingInput">Passenger Name</label>
                                    </div>
                                    <div className="form-floating">
                                        <tr >
                                            <td className="form-floating col-3" >
                                                <input type="email" name="email" class="form-control" value={this.state.email} onChange={this.changeEmail} required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" />
                                                <label for="floatingInput">Email-Id</label>
                                            </td>

                                            <td className="form-floating col-2">
                                                <input type="text" name="phoneno" class="form-control" value={this.state.phoneno} onChange={this.changePhoneno} required pattern="[0-9]{10}" />
                                                <label for="floatingInput">Phone number</label>
                                            </td>

                                            <td className="form-floating col-1">
                                                <input type="text" name="age" class="form-control" value={this.state.age} onChange={this.changeAge} required pattern="[0-9]{2}" />
                                                <label for="floatingInput">Age</label>
                                            </td>
                                        </tr>
                                    </div>

                                    <div className="form-floating ">
                                        <input type="text" name="address" class="form-control" value={this.state.address} onChange={this.changeAddress} required />
                                        <label for="floatingInput" >Address </label>
                                    </div>

                                    <div style={{ 'float': 'right' }}>
                                        <Button variant="primary" onClick={this.savePassenger}>save Passenger</Button>
                                        <span>&nbsp;</span>
                                        <Button variant="primary" type="submit" onClick="">Add Passenger</Button>
                                        <span>&nbsp;</span>
                                        <Button onClick={this.changeNoOfPassenger}>Book</Button>
                                    </div>
                                </div>
                            </section>
                        </div >
                    </form>
                </div>
            )
        }
    }
}

