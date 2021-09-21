import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap'
import TourService from '../Services/TourService';




class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {

            user_id: '',
            user_name: "",
            email_id: "",
            password: "",

        }

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.register = this.register.bind(this);
    }
    state = {
        openModal: false
    }

    changeName = (event) => {
        this.setState({ user_name: event.target.value });
    }

    changeEmail = (event) => {
        this.setState({ email_id: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    register = (e) => {
        e.preventDefault();
        let user = {
            user_name: this.state.user_name,
            email: this.state.email_id,
            password: this.state.password
        }
        console.log('user => ' + JSON.stringify(user));
        TourService.addLogin(user)
        alert("Registred Successfully!")
         console.log("aeeresf")
        this.onCloseModal()
    }


    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }


    render() {

        return (
            <div >
                <Button variant="primary" onClick={this.onClickButton}>Sign Up</Button>

                <Modal open={this.state.openModal} onClose={this.onCloseModal}

                    aria-labelledby="contained-modal-title-vcenter"
                    center
                    classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                        modal: 'customModal',
                    }}
                    animationDuration={300}
                >
                    <form className="formSign">

                        <h1 className="h3 fw-normal"><center> Sign In</center></h1>
                        <div className="form-floating">

                            <input type="text" class="form-control" name="user_name"  pattern="[a-zA-Z].{8,50}$" value={this.state.user_name} onChange={this.changeName} required/>

                            <label for="floatingInput">User Name</label>
                        </div>
                        <div class="form-floating ">

                        <input type="text" class="form-control" name="email_id"  pattern="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]" value={this.state.email_id} onChange={this.changeEmail} required />
                            <label for="floatingInput">Email Id</label>
                        </div>
                        <div className="form-floating">

                            <input type="text" type="password" className="form-control" name="password" pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" onChange={this.changePassword} value={this.state.password} required/>

                            <label for="floatingPassword">Password</label>
                        </div>

                        <div style={{ 'float': 'right' }}>
                            <Button variant="primary" onClick={this.register}>Sign Up</Button>
                            <span>&nbsp;</span>
                            <Button onClick={this.onCloseModal}>Close</Button>
                        </div>

                    </form>
                </Modal>

            </div>
        );
    }
}

export default SignUp;