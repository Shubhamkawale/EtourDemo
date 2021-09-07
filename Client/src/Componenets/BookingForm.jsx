import React, { Component } from 'react'
import {  Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default class BookingForm extends Component {


    render() {
        console.log(this.props.values);
        return (
            <div>
                    <Booking></Booking>
            </div>
        )
    }
} 

const Booking = () => {
    return (
        
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
                    pname: Yup.string().required('please fill the name'),
                    age: Yup.number().required('enter proper age').positive().integer(),
                    email: Yup.string().email(),
                    phoneno: Yup.number().min(10, "Must be more than 10 characters"),
                    address: Yup.string(),
                    uid: Yup.string().required()

                }
            )}
            onSubmit={values => {

            }}
        >
            {
                props => (
                <div>

    <h2>Enter Customer Details...</h2>

    <Form>

      <p>

          <label htmlFor="pname">Passenger Name </label>

          <Field name="pname" type="text"></Field>
          <ErrorMessage name="pname"></ErrorMessage>

      </p>

      <p>

          <label htmlFor="age">Enter age </label>

          <Field name="age" type="text"></Field>

          <ErrorMessage name="age"></ErrorMessage>

      </p>

      <p>

          <label htmlFor="email">Email </label>

          <Field name="email" type="text"></Field>

          <ErrorMessage name="email"></ErrorMessage>

      </p>

      <p>

          <label htmlFor="phoneno">Enter Phone number </label>

          <Field name="phoneno" type="text"></Field>
          <ErrorMessage name="phoneno"></ErrorMessage>

      </p>

      <p>

          <label htmlFor="address">Address </label>

          <Field name="address" type="text"></Field>

          <ErrorMessage name="address"></ErrorMessage>

      </p>

      <p>

      <label htmlFor="uid">Uid </label>

        <Field name="uid" type="text"></Field>

     <ErrorMessage name="uid"></ErrorMessage>



        
      </p>
      <button type="submit" disabled={props.isValid===false}>Submit</button>

    </Form>

    </div >

            )
        }
        </Formik >
    )
}