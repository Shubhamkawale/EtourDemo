import React, { Component } from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import TourService from '../Services/TourService';


export default class PackagesCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tour: {}
        }
        
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
                    

                    <Card style={{ width: '340px' ,"height":"350px","padding":"5px","marging-left":"50px"}}>
                        <img src={ this.state.tour.img} style={{"height":"200px","padding":"5px"}}/>
                        <Card.Body>
                            <Card.Title>{ this.state.tour.package_name }</Card.Title>
                            <Card.Text>
                            { this.state.tour.package_desc }
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"></small>
                        </Card.Footer>
                    </Card>



                </div>

            </div>
        )
    }
}
