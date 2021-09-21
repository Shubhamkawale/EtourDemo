import React, { Component } from 'react';



class InvoiceComponent extends Component {



    paymentInfo() {
        alert("Payment Done")
    }


    render() {
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
                                    <div class="col-xl-8 w-50">
                                        <table className="table table-striped table-borderless">
                                            <thead bgcolor="skyblue">
                                                <tr>
                                                    <th>Bill To</th>

                                                </tr>


                                            </thead>
                                            <tbody>
                                                {
                                                    <tr>
                                                        <td>Name <br />Address<br />Phone</td>
                                                    </tr>


                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-xl-4 w-50">
                                        <div className="row swaraj">
                                            <div className="col swaraj">
                                                <table className="table table-striped table-borderless" align="right">
                                                    <thead bgcolor="skyblue">
                                                        <tr>
                                                            <th>Invoice</th>
                                                            <th>Date</th>

                                                        </tr>


                                                    </thead>
                                                    <tbody>
                                                        {
                                                            <tr>
                                                                <td>123</td>
                                                                <td>{new Date().toLocaleDateString()}</td>
                                                            </tr>

                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row swaraj">
                                            <div className="col swaraj">
                                                <table className="table table-striped table-borderless" align="right">
                                                    <thead bgcolor="skyblue">
                                                        <tr>
                                                            <th>Customer ID</th>
                                                            <th>Terms</th>

                                                        </tr>


                                                    </thead>
                                                    <tbody>
                                                        {
                                                            <tr>
                                                                <td>123</td>
                                                                <td>terms</td>
                                                            </tr>

                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="row InvoiceTable mx-1 justify-content-center">
                                    <table className="table table-striped table-borderless">
                                        <thead className="text-black" bgcolor="skyblue">
                                            <tr>
                                                <th>Passenger</th>
                                                <th>Age</th>
                                                <th>Price</th>
                                                <th>Total</th>

                                            </tr>


                                        </thead>
                                        <tbody>
                                            {

                                                <tr>
                                                    <td> Ronaldo </td>
                                                    <td> 36 </td>
                                                    <td> 8000</td>
                                                    <td> 8000</td>

                                                </tr>

                                            }
                                        </tbody>



                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col AdditionalInfo w-50">
                                        <p class="ms-3">Add additional notes and payment information</p>

                                    </div>
                                    <div class="col TotalAmount w-50">
                                        <table className="table table-striped table-borderless w-100">
                                            <tbody>
                                                {

                                                    <tr>
                                                        <th className="w-50"> Sub Total <br /> Tax <br /> Total Amount</th>
                                                        <td> 8000</td>

                                                    </tr>

                                                }
                                            </tbody>



                                        </table>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-xl-10">
                                        <p>Thank you for your purchase</p>
                                    </div>
                                    <div class="col-xl-2">
                                        <button type="button" class="btn btn-primary text-capitalizebackground-color:#60bdf3" onClick={this.paymentInfo}>Pay Now</button>
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