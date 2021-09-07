import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import TourService from '../Services/TourService';


export default class PackagesCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tour: {}
        }
        
    }

    book(tour_id) {
        this.props.history.push("/book-Tour/:id");
    }

    componentDidMount() {
        TourService.getTourById(this.props.id).then((res) => {
            this.setState({ tour: res.data });
        });
        



    }

    render() {
        return (
            <div>
                <div>
                    

                    <Card style={{ width: '340px' ,"height":"375px","padding":"5px","marging":"20px!impotant"}}>
                        <img src={ this.state.tour.img} style={{"height":"200px","padding":"5px"}} alt=""/>
                        <Card.Body>
                            <Card.Title>{ this.state.tour.package_name }</Card.Title>
                            <Card.Text>
                            { this.state.tour.package_desc }
                            </Card.Text>
                            
                        </Card.Body>
                        <Card.Footer style={{"height":"100px"}}>
                            <Button variant="primary" style={{ width: '300px' }} onClick={() => this.book(this.state.tour.tour_id)} >
                                    Book Now</Button>
                        </Card.Footer>
                    </Card>



                </div>

            </div>
        )
    }
}
