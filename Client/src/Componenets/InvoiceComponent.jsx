import React, { Component } from 'react';
import TourService from '../Services/TourService';
import { Button } from "react-bootstrap"



class InvoiceComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            passengers: [],
            booking: {},
            tour: {},
        }

    }

    componentDidMount() {
        const userId = sessionStorage.getItem("userId")
        const sessionId = sessionStorage.getItem("sessionId")       
        const tourid = sessionStorage.getItem("tourid")
        TourService.getUserById(userId).then((res) => {
            this.setState({ user: res.data })


        })

        TourService.getAllPassengerById(sessionId).then((res) => {
            this.setState({ passengers: res.data })
        })

        TourService.getBookingById(sessionId).then((res) => {
            this.setState({ booking: res.data })
              
            
        })

       
        TourService.getTourById(tourid).then((res) => {
            this.setState({ tour: res.data })
        })
        

    }

    paymentInfo() {
        alert("Payment Done")
    }


    render() {
        console.log("booking",this.state.booking)
        
        return (
            <div className="print">
                <div class="card">
                    <div class="card-body">
                        <div class="container mb-5 mt-3">
                            <div class="row d-flex align-items-baseline" >
                                <div class="col-xl-9">
                                    <p>Invoice<strong>ID: #123-123</strong></p>
                                </div>
                                <hr />
                            </div>

                            <div className="container">
                                <div className="row companyName">
                                    <div className="col companyName">
                                        <ul className="list-unstyled">
                                            <li class="text-muted">Company Name</li>
                                            <li class="text-muted">Street, City</li>
                                            <li class="text-muted">State, Country</li>
                                            <li class="text-muted">123-456-789</li>
                                        </ul>
                                    </div>
                                    <div className="col companyLOGO">
                                        <img className="InvoiceLOGO" align="right" src="/Images/InvLOGO.png" alt="InvoiceLOGO" />
                                    </div>
                                </div>

                                <div class="row InvoiceInfo">

                                    <table className="table table-striped table-borderless">
                                        <thead bgcolor="skyblue">
                                            <tr>
                                                <th>Bill To</th>
                                                <th>Invoice Id</th>
                                                <th>Customer ID</th>
                                                <th>Contact number</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                <tr>
                                                    <td>{this.state.user.user_name} </td>
                                                    <td>{this.state.booking.booking_id}</td>
                                                    <td>{this.state.user.user_id}</td>
                                                    <td>{this.state.user.phoneno}</td>
                                                    <td>{new Date().toLocaleDateString()}</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>


                                </div>
                                <hr />
                                <div class="row InvoiceInfo">

                                    <table className="table table-striped table-borderless">
                                        <thead bgcolor="skyblue">
                                            <tr>
                                                <th>Package Name</th>
                                                <th>Package Type</th>
                                                <th>Tour Location</th>
                                                <th>Tour Start Date</th>
                                                <th>Tour End Date</th>
                                            </tr> 
                                        </thead>
                                        <tbody>
                                            {
                                                <tr>
                                                    <td>{this.state.tour.package_name} </td>
                                                    <td>{this.state.tour.package_type}</td>
                                                    <td>{this.state.tour.tour_location}</td>
                                                    <td>{this.state.tour.start_date}</td>
                                                    <td>{this.state.tour.end_date}</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>


                                </div>
                                <hr />

                                <div className="row InvoiceTable  justify-content-center">
                                    <table className="table table-striped table-borderless">
                                        <thead className="text-black" bgcolor="skyblue">
                                            <tr><th colSpan="3">Customer Details</th></tr>
                                            <tr>
                                                <th>Name</th>
                                                <th>Contact Number</th>
                                                <th>Age</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                this.state.passengers.map(
                                                    passenger =>
                                                        <tr>

                                                            <td> {passenger.pname}  </td>
                                                            <td> {passenger.phoneno}  </td>
                                                            <td>{passenger.age} </td>

                                                        </tr>
                                                )}
                                            <tr>
                                                <th className="w-50" colSpan="2">  Total Amount</th>
                                                <td> {this.state.booking.cost}</td>

                                            </tr>
                                            <tr>
                                                <th className="w-50" colSpan="2">  GST </th>
                                                <td> 18%</td>

                                            </tr>
                                            <tr>
                                                <th className="w-50" colSpan="2">  Final Cost </th>
                                                <td> {this.state.booking.cost *1.18}</td>

                                            </tr>
                                        </tbody>



                                    </table>
                                </div>

                                <hr />
                                <div class="row">

                                    <div style={{ 'float': 'right' }}>
                                        <Button variant="primary" onClick={this.paymentInfo}>Book</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvoiceComponent;