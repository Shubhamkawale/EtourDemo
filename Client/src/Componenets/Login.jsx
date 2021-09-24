import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router';
import TourService from '../Services/TourService'




class Login extends Component {

    constructor(props) {
        super(props)
        const userId = sessionStorage.getItem("userId")
        let loggedin = true;
        if (userId === null) {
            loggedin = false;
        }
        this.state = {
            user_email: "",
            pwd: "",
            loggedin: '',
            users: [],
            openModal: false,


        }

        this.changeUser = this.changeUser.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)

    }

    componentDidMount() {
        TourService.getallUsers().then((res) => {
            this.setState({ users: res.data })

        })
    }

    //session login
    changeUser(e) {
        this.setState({ user_email: e.target.value })
    }
    changePassword(e) {
        this.setState({ pwd: e.target.value })
    }
    login = (e) => {
        e.preventDefault()
        const { user_email, pwd } = this.state
        //login logic
        if (user_email === "Admin" && pwd === "admin") {
            sessionStorage.setItem("userName", user_email)
            sessionStorage.setItem("userId", "00000")

            this.setState({ loggedin: true })
        }
        else {
            for (let user of this.state.users) {

                if (user_email === user.email && pwd === user.password) {
                    sessionStorage.setItem("userId", user.user_id)
                    sessionStorage.setItem("userName", user.user_name)
                    sessionStorage.setItem("sessionId", Math.floor(Math.random() * 1000000) + 1)

                    this.setState({ loggedin: true })
                    break;
                }


            }
        }


        if (sessionStorage.getItem("userId") == null) {
            alert("invalid user")
        }

        this.onCloseModal()
    }

    logout() {
        alert("Logged out");
        sessionStorage.removeItem("userId")
        sessionStorage.removeItem("userName")
        sessionStorage.removeItem("sessionId")
        sessionStorage.removeItem("tourid")


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
        
        let button;

        if(this.state.loggedin && sessionStorage.getItem("userName") === "Admin"){
            return <Redirect to="/tourlist" />
           
        }

        if (this.state.loggedin) {
            <Redirect to="/" />
        }



        if (loggedin || sessionStorage.getItem("userName") === "Admin") {
            button = <a href="/" >
                <Button onClick={this.logout} variant="primary">Log Out</Button>
                <br />
                <label style={{ "color": "#ffffff" }}>Welcome ! {sessionStorage.getItem("userName")}</label>
            </a>
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

                            <input type="email" class="form-control" name="user_email" required pattern="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]" value={this.state.user_email} onChange={this.changeUser} />


                            <label for="floatingInput">User Name</label>
                        </div>




                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" name="pwd" required value={this.state.pwd} onChange={this.changePassword} />
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