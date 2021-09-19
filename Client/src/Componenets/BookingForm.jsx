import React, { Component } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import * as Yup from 'yup'
import TourService from '../Services/TourService'

export default class BookingForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.location.state,
           
            pid: this.props.match.params.pid,
            pname: '',
            email: '',
            phoneno: '',
            age: '',
            address: '',
            uid: '',
            tour: {},
            no_of_passenger:''
            
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
    
    

    changeNoOfPassenger = (event) => {
        this.setState({ no_of_passenger: event.target.value });
        this.bookTour()
    }
    changepName= (event) => {
        this.setState({pname: event.target.value});
    }
    changeEmail= (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneno= (event) => {
        this.setState({phoneno: event.target.value});
    }
    changeAge= (event) => {
        this.setState({age: event.target.value});
    }
    changeAddress= (event) => {
        this.setState({address: event.target.value});
    }
    changeUid= (event) => {
        this.setState({uid: event.target.value});
    }

    savePassenger = (e) => {
        e.preventDefault();
        let passenger = {pname: this.state.pname, email: this.state.email, phoneno: this.state.phoneno, age: this.state.age, address: this.state.address, uid: this.state.uid,booking_id: this.state.booking_id};
        console.log('passenger => ' + JSON.stringify(passenger));

        TourService.addPassenger(passenger).then(res =>{
            this.props.history.push('/booking');
        });

    
    }

    bookTour = (e) => {
        let book = {user_id:this.state.user_id, tour_id :this.state.tour_id, no_of_passenger: this.state.no_of_passenger, cost:this.state.package_cost}
        
        console.log('book => ' + JSON.stringify(book));

        TourService.bookTour(book).then(res => {
            this.props.history.push('/invoice');
        })

    }

    createBill = (e) => {
        this.addPassenger() 
        
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        pname: '',
                        age: '',
                        email: '',
                        phoneno: '',
                        address: '',
                        uid: ''
                    }}
                    validationSchema={Yup.object(
                        {
                            pname: Yup.string().required('please enter a valid Name'),
                            age: Yup.number().required('enter a valid Age').positive().integer(),
                            email: Yup.string().email(),
                            phoneno: Yup.number().min(10, "Must be more than 10 characters"),
                            address: Yup.string(),
                            uid: Yup.string().required(),
                            no_of_passenger: Yup.number().required("Please enter a valid value")

                        }
                    )}
                    onSubmit={values => {

                    }}
                >
                    {
                        props => (
                            <div>
                                <section>
                                    <form className="container col-6">
                                        <h2>Tour Details...</h2>


                                        <div className="form-floating">
                                            <tr>
                                                <td className=" form-floating col-3" >
                                                    <input type="text" name="package_Name" class="form-control" aria-label="package_Name" value={this.state.tour.package_name} disabled />
                                                    <label htmlFor="package_Name">Package Name</label>

                                                </td>
                                                <td className="form-floating col-3" >
                                                    <input type="text" name="package_Cost" class="form-control" aria-label="package_Cost" disabled value={this.state.tour.tour_location} />
                                                    <label htmlFor="package_Cost">Package Location</label>
                                                </td>


                                            </tr>
                                        </div>
                                        <div>
                                            <tr>
                                                <td className="form-floating col-2" >
                                                    <input type="text" name="package_Duration" class="form-control" aria-label="package_Duration" value={this.state.tour.tour_span} disabled />
                                                    <label htmlFor="package_Duration">Package Duration</label>
                                                </td>
                                                <td className="form-floating col-2" >
                                                    <input type="text" name="package_Cost" class="form-control" aria-label="package_Cost" value={this.state.tour.package_cost} disabled />
                                                    <label htmlFor="package_Cost">Package Cost</label>
                                                </td>
                                                <td className=" form-floating col-2" >
                                                    <input type="number" name="no_of_passenger" class="form-control" aria-label="no_of_passenger" required value={this.state.no_of_passenger}  onChange={this.changeNoOfPassenger} />
                                                    <label htmlFor="no_of_passenger">Number of passenger</label>
                                                    <ErrorMessage name="no_of_passenger"></ErrorMessage>
                                                </td>



                                            </tr>
                                        </div>


                                    </form>
                                </section>


                                <section>
                                    <h2>Enter Passenger Details...</h2>

                                    <Form className="container col-6">

                                        <div className="form-floating ">



                                            <input name="pname" class="form-control" aria-label="pname"   value={this.state.pname} onChange={this.changepName} />
                                            <label htmlFor="pname">Passenger Name</label>
                                            <ErrorMessage name="pname"></ErrorMessage>

                                        </div>

                                        <div className="form-floating">
                                            <tr >

                                                <td className="form-floating col-3" >

                                                    <input type="text" name="email" class="form-control" aria-label="email" value={this.state.email} onChange={this.changeEmail} />
                                                    <label htmlFor="email">Email-Id</label>
                                                    <ErrorMessage name="email"></ErrorMessage>
                                                </td>
                                                <td className="form-floating col-2">
                                                    <input type="text" name="phoneno" class="form-control" aria-label="phoneno" value={this.state.phoneno} onChange={this.changePhoneno} />
                                                    <label htmlFor="phoneno">Passenger Phone no.</label>
                                                    <ErrorMessage name="phoneno"></ErrorMessage>
                                                </td>
                                                <td className="form-floating col-1">
                                                    <input type="text" name="age" class="form-control" aria-label="age" value={this.state.age} onChange={this.changeAge} />
                                                    <label htmlFor="age">Age</label>
                                                    <ErrorMessage name="age"></ErrorMessage>
                                                </td>
                                            </tr>

                                        </div>

                                        <div className="form-floating ">
                                            <input type="text" name="address" class="form-control" aria-label="address" value={this.state.address} onChange={this.changeAddress} />
                                            <label htmlFor="address" >Address </label>
                                            <ErrorMessage name="address"></ErrorMessage>
                                        </div>

                                        
                                        <div className="form-floating ">
                                            <input type="text" name="uid" class="form-control" aria-label="uid" value={this.state.uid} onChange={this.changeUid}/>
                                            <label htmlFor="uid">Uid</label>
                                            <ErrorMessage name="uid"></ErrorMessage>
                                        </div>

                                        <div style={{ 'float': 'right' }}>
                                            <Button variant="primary" onClick={ this.savePassenger}>Add Passenger</Button>
                                            <span>&nbsp;</span>
                                            <Button onClick={ this.createBill}>Submit</Button>
                                        </div>

                                    </Form>
                                </section>

                            </div >

                        )
                    }
                </Formik >
            </div>
        )
    }
}

