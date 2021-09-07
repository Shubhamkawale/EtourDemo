import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter as Router} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

export default class MyNavbar extends Component {


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand ><span style={{ "font-size": "35px" }}>E</span><big>Tour</big></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Router>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Tours" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/view-Tour/I" >International</NavDropdown.Item>
                                        <NavDropdown.Item href="/view-Tour/D" >Domestic</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link href="#pricing">About Us</Nav.Link>
                                </Router>
                            </Nav>
                            <Nav>
                                <Login />
                                <p>&nbsp;</p>
                                <SignUp />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>
        )
    }
}

