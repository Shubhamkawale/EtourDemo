import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button, Modal } from 'react-bootstrap'

export default class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Tours" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">International</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Domestic</NavDropdown.Item>
                                </NavDropdown>
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


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sigin In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>

                    <body className="text-center width:50:true " >

                        <main className="form-signin">
                            <form>

                                <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
                                <div className="form-floating">
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <br />
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="w-50 btn btn-lg btn-dark" type="submit">Sign in</button>

                            </form>
                        </main>

                    </body>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Login() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Login
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}



function MyVerticallyCenteredModalSignUp(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sigin In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>

                    <body className="text-center width:50:true " >

                        <main className="form-signin">
                            <form>

                                <h1 className="h3 mb-3 fw-normal">Sign Up Here</h1>
                                <div className="form-floating">
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                    <label for="floatingInput">Please Enter Username</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Enter Password Here</label>
                                </div>
                                <br />

                                <div class="form-floating mb-3">
                                    <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInputValue">Enter Email address</label>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <br />
                                <button className="w-50 btn btn-lg btn-dark" type="submit" onClick="" >Done</button>


                            </form>
                        </main>

                    </body>

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function SignUp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign Up
            </Button>

            <MyVerticallyCenteredModalSignUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}