import React from 'react'
import {  Button, Modal } from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <div>


                    <form className="formSign">

                        <h1 className="h3 mb-3 fw-normal"><center> Sign In</center></h1>
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
                        <div style={{ 'float': 'right' }}>
                            <Button variant="primary">Sign In</Button>
                            <span>&nbsp;</span>
                            <Button onClick={props.onHide}>Close</Button>
                        </div>

                    </form>


                </div>
            </Modal.Body>

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



export default Login;