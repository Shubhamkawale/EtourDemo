import React, { Component } from 'react'
import TourService from '../Services/TourService'
import {Card,Button} from "react-bootstrap"

export default class DetailedIternary extends Component {
    constructor(props) {
        super(props)
    console.log("props",this.props.location.state)
        this.state = {
            id:this.props.location.state,
             tour:{},
             iternary:{}
        }
    }
    
   componentDidMount(){
    TourService.getTourById(this.state.id).then((res)=>{
        this.setState({tour: res.data})
    })
    TourService.getIternaryById(this.state.id).then((res)=>{
        this.setState({iternary: res.data})
    })
   }

    render() {
        console.log(this.state.iternary)
        return (
            <div>
                <div>


                    <Card style={{ width: '340px', "height": "350px", "padding": "5px", "marging-left": "50px" }} history={this.props.history}>
                        <img src={this.state.tour.img} style={{ "height": "200px", "padding": "5px" }} />
                        <Card.Body>
                            <Card.Title>{this.state.tour.package_name}</Card.Title>
                            <Card.Text>
                                {this.state.iternary.day1}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                                <Button variant="primary" style={{ width: '300px' }} >
                                    Show Tour</Button>
                            

                        </Card.Footer>
                    </Card>



                </div>

            </div>
        )
    }
}