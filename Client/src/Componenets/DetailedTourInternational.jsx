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
        let iten4, iten5, iten6, iten7, iten8;
        if (this.state.iternary.day4 != null) {
            iten4 = <tr className="subheadings"><td>DAY-4 </td><td> {this.state.iternary.day4}</td></tr>

        }
        if (this.state.iternary.day5 != null) {
            iten5 = <tr className="subheadings"><td>DAY-5 </td><td> {this.state.iternary.day5}</td></tr>

        }
        if (this.state.iternary.day6 != null) {
            iten6 = <tr className="subheadings"><td>DAY-6 </td><td> {this.state.iternary.day6}</td></tr>

        }
        if (this.state.iternary.day7 != null) {
            iten7 = <tr className="subheadings"><td>DAY-7 </td><td> {this.state.iternary.day7}</td></tr>

        }
        if (this.state.iternary.day8 != null) {
            iten8 = <tr className="subheadings"><td>DAY-8 </td><td> {this.state.iternary.day8}</td></tr>

        }
        return (

            <div>
                <div>


                    <Card id="TourCard" history={this.props.history}>
                    <h1 id="tourHeader">{this.state.tour.package_name}</h1>
                        <Card.Img src={this.state.tour.img} style={{"height":"400px","width":"800px","margin":"auto"}} id="iternaryImage"/>
                        
                        <Card.Body>
                            <p id="tourdescription"><h3>Tour Discripton</h3>
                                <h5>{this.state.tour.package_desc}</h5>

                            </p>
                            <h3 id="iternaryHeader">Tour Iternary</h3>
                            <Table striped bordered hover responsive="lg" style={{"margin":"auto","width":"auto"}} id="iternaryTable" >

                                <th>

                                    <tr className="subheadings"  align="center"><td style={{"width":"70px"}}>DAY-1</td><td> {this.state.iternary.day1}</td></tr>
                                    <tr className="headings"><td>DAY-2 </td><td>     {this.state.iternary.day2}</td></tr>
                                    <tr className="headings"><td>DAY-3 </td><td> {this.state.iternary.day3}</td></tr>
                                    {iten4}
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

                                <Button className="bookButton" variant="primary" >
                                    Book Tour</Button>
                            </Link>
                        </Card.Footer>


                    </Card>



                </div>

            </div>
        )
    }
}