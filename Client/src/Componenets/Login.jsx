import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router';




class Login extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedin = true;
        if (token === null) {
            loggedin = false;
        }
        this.state = {
            user_id: "",
            password: "",
            loggedin: '',
            openModal: false,
           

        }   

        this.changeUser = this.changeUser.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
        this.logout=this.logout.bind(this)

    }

    //session login
    changeUser(e) {
        this.setState({ user_id: e.target.value })
    }
    changePassword(e) {
        this.setState({ password: e.target.value })
    }
    login(e) {
        e.preventDefault()
        const { user_id, password } = this.state
        //login logic
        if (user_id === "abc" && password === "123") {
            localStorage.setItem("token", user_id)

            this.setState({ loggedin: true })
        }
        this.onCloseModal()
    }

    logout() {
        alert("Logged out");
        localStorage.removeItem("token")
        
    }

    
    //modal function
    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        
        const loggedin = this.state.loggedin;
        if (loggedin) {
            <Redirect to="/" />
        }
            
        let button;
        
            if (loggedin === true) {
                button = <div>
                    <a href="/" >
                        <Button onClick={this.logout} variant="primary">Log Out</Button>
                    </a>
                    <br />
                    <label style={{ "color": "#ffffff" }}>{localStorage.getItem("token")}</label>
                </div>;
            } else {
               
                button = <Button variant="primary" onClick={this.onClickButton}>LogIn</Button>;
            }
        
        

        return (
            <div >

                {button}
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
                    <form className="formSign" >

                        <h1 className="h3 fw-normal"><center> Sign In</center></h1>



                        <div className="form-floating">

                            <input type="text" class="form-control"  name="user_id" required pattern="[a-zA-Z]{8,50}" value={this.state.user_id} onChange={this.changeUser} />


                            <label for="floatingInput">User Name</label>
                        </div>




                        <div className="form-floating">
                            <input type="password" className="form-control"  id="floatingPassword" name="password" required value={this.state.password} onChange={this.changePassword} />
                            <label for="floatingInput">Password</label>
                        </div>
                        <div style={{ 'float': 'right' }}>
                            <Button onClick={this.login} variant="primary">Sign In</Button>
                            <span>&nbsp;</span>
                            <Button onClick={this.onCloseModal}>Close</Button>
                        </div>

                    </form>
                </Modal>

            </div>
        );
    }
}

export default Login;