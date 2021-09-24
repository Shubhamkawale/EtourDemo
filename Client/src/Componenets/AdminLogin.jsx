import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { Redirect} from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)
        const token=sessionStorage.getItem("username")
        let loggedin= true;
        if(token == null){
            loggedin= false;
        }
        this.state = {
             user_id:"",
             password:"",
             loggedin

        }
        this.changeUser=this.changeUser.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    changeUser(e){
        this.setState({user_id: e.target.value})
    }
    changePassword(e){
        this.setState({password: e.target.value})
    }
    submitForm(e){
        e.preventDefault()
        const {user_id, password}= this.state
        //login logic
        if(user_id === "Admin" && password === "admin"){
            sessionStorage.setItem("userName",user_id)
            
            this.setState({loggedin: true})
        }
    }
  
    
    render() {
       
        if(this.state.loggedin){
            return <Redirect to="/tourlist"/>
        }

        
        return (
            <div>
                <h1>Login</h1>
                

                <form className="formSign"  onSubmit={this.submitForm} style={{"width":"500px","margin":"auto",}}>

                        <div className="form-floating">

                            <input type="text" class="form-control"  name="user_id" required  value={this.state.user_id} onChange={this.changeUser} />
                            <label for="floatingInput">User Name</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control"  id="floatingPassword" name="password"  value={this.state.password} onChange={this.changePassword} />
                            <label for="floatingInput">Password</label>
                        </div>
                         <div style={{ 'float': 'right' }}>
                        <Button type="submit">Login</Button>
                        </div>
<br/><br/>
                    </form>
            </div>
        )
    }
}
