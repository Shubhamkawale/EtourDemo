import React, { Component } from 'react'
import TourService from '../Services/TourService'
import { Card, Button, Table } from "react-bootstrap"
import { Link } from 'react-router-dom'


export default class DetailedIternary extends Component {
    constructor(props) {
        super(props)
        console.log("props", this.props.location.state)
        this.state = {
            id: this.props.location.state,
            iternary: {},
            tour: {}

        }
    }

    componentDidMount() {
        TourService.getTourById(this.state.id).then((res) => {
            this.setState({ tour: res.data })
        })
        TourService.getIternaryById(this.state.id).then((res) => {
            this.setState({ iternary: res.data })
        })
    }

    render() {
        console.log(this.state.iternary)
        let iten5, iten6, iten7, iten8;
        if (this.state.iternary.day5 != null) {
            iten5 = <tr className="subheadings">DAY-5  {this.state.iternary.day5}</tr>

        }
        if (this.state.iternary.day6 != null) {
            iten6 = <tr className="subheadings">DAY-6  {this.state.iternary.day6}</tr>

        }
        if (this.state.iternary.day7 != null) {
            iten7 = <tr className="subheadings">DAY-7  {this.state.iternary.day7}</tr>

        }
        if (this.state.iternary.day8 != null) {
            iten8 = <tr className="subheadings">DAY-8  {this.state.iternary.day8}</tr>

        }
        return (

            <div>
                <div>


                    <Card history={this.props.history}>
                        <Card.Img src={this.state.tour.img} />
                        <Card.Body>
                            <h1>Tour Plan</h1>
                            <Table striped bordered hover responsive="lg" >

                                <th>

                                    <tr className="subheadings">DAY-1  {this.state.iternary.day1}</tr>
                                    <tr className="headings">DAY-2  {this.state.iternary.day2}</tr>
                                    <tr className="headings">DAY-3  {this.state.iternary.day3}</tr>
                                    <tr className="headings">DAY-4  {this.state.iternary.day4}</tr>
                                    {iten5}
                                    {iten6}
                                    {iten7}
                                    {iten8}

                                </th>
                            </Table>
                        </Card.Body>
                        <Card.Footer>

                            <Link to={{
                                pathname: "/booking/",
                                state: this.state.tour.tour_id
                            }} onc>

                                <Button variant="primary" >
                                    Book Tour</Button>
                            </Link>
                        </Card.Footer>


                    </Card>



                </div>

            </div>
        )
    }
}