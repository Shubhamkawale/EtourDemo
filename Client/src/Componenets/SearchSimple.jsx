import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"





export default class SearchSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            lowprice: 0,
            highprice: 0,
            span: 0

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTwo = this.handleChangeTwo.bind(this);
        this.handleChangelow = this.handleChangelow.bind(this);
        this.handleChangehigh = this.handleChangehigh.bind(this);
        this.handleChangeSpan = this.handleChangeSpan.bind(this);
        
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeTwo(date) {
        this.setState({
            endDate: date
        });
    }
    handleChangelow(e){
        this.setState({lowprice: e.target.value})
    }
    handleChangehigh(e){
        this.setState({highprice: e.target.value})
    }
    handleChangeSpan(e){
        this.setState({span: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.startDate);
    }

    render() {
        console.log(this.state.lowprice)
        console.log(this.state.highprice)
        return (
            <div>
                
                <div class="container border border-dark bg-light text-dark" id="searchBar">
                    
                    
                    <div>
                        <table class="table searchBarTable table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">
                                        
                                        <DatePicker
                                            className="searchBarInput"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            name="startDate"
                                            dateFormat='yyyy-MM-dd'
                                           
                                        />

                                    </th>
                                    <th scope="col">
                                        
                                        <DatePicker
                                            className="searchBarInput"
                                            selected={this.state.endDate}
                                            onChange={this.handleChangeTwo}
                                            name="endDate"
                                            dateFormat='yyyy-MM-dd'
                                            
                                        />
                                    </th>
                                    <th scope="col"> <Link to={
                                        {
                                            pathname:"/date",
                                            state:{start:this.state.startDate,
                                            end: this.state.endDate}
                                        }
                                    }>
                                        <Button className="searchBarButton" variant="info" style={{ width: '300px' }} >
                                            Search</Button>
                                    </Link></th>
                                </tr>

                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">Price Band(in Rs)</th>
                                    <th scope="col">
                                        <input
                                            class="searchBarInput w-50 form-control form-control-sm"
                                            type="text"
                                            placeholder="From"
                                            aria-label="default input example"
                                            defaultValue={this.state.lowprice}
                                            onChange={this.handleChangelow}
                                        />
                                    </th>
                                    <th scope="col">
                                        <input
                                            class="searchBarInput w-50 form-control form-control-sm"
                                            type="text"
                                            placeholder="To"
                                            aria-label="default input example"
                                            defaultValue={this.state.highprice}
                                            onChange={this.handleChangehigh}
                                        />
                                    </th>
                                    <th scope="col"> <Link to={
                                        {
                                            pathname:"/price",
                                            state:{first:this.state.lowprice,
                                            last: this.state.highprice}
                                        }
                                    }>
                                        <Button className="searchBarButton" variant="info" style={{ width: '300px' }} >
                                            Search</Button>
                                    </Link></th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">Duration(in Days)</th>
                                    <th scope="col">
                                        <input
                                          
                                            className="searchBarInput"
                                            id="duration"
                                            type="text"
                                            placeholder="From"
                                            aria-label="default input example"
                                            defaultValue={this.state.span}
                                            onChange={this.handleChangeSpan}
                                        />
                                    </th>
                                    
                                    <th scope="col" colspan="2"> <Link to={
                                        {
                                            pathname:"/span",
                                            state:this.state.span
                                        }
                                    }>
                                        <Button id="durationButton" variant="info" style={{ width: '300px' }} >
                                            Search</Button>
                                    </Link></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    
                    <br />
                </div>
            </div>
        );
    }
}
