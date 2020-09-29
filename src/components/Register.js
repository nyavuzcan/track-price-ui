import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import Input from "./Input"

class Register extends Component {
    state={
        name :null,
        surname: null,
        email: null,
        password: null,
        passwordRepeat: null,
        visible: {
            display:'none'
        }

    }

onChange = (e) =>{
    const{name,value} = e.target
    this.setState({
        [name]: value
    })
}
onKeyUp = (e) => {
    (this.state.password !== this.state.passwordRepeat) ? this.setState({visible:{display:"inline"}}) : this.setState({visible:{display:"none"}})
}

    render() {
        return (
            <div className="register-form-container">
            <form>
                <h3>Sign Up</h3>
                    <Input label="First name" type="text" name="name" className="form-control" placeholder="First name" onChange={this.onChange} />
                    <Input label="Last name" type="text" name="surname" className="form-control" placeholder="Last name" onChange={this.onChange} />
                    <Input label="Email address" type="text" name="email" className="form-control" placeholder="Email address" onChange={this.onChange} />
                    <Input label="Password" type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} />
                    <Input label="Password Repeat" type="password" name="passwordRepeat" className="form-control" placeholder="Password repear" onChange={this.onChange} />
            
              
            <div className="alert alert-danger"  role="alert" style={this.state.visible}>Passwords Doesn't Match</div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <button type="submit" className="btn btn-dark btn-block" style={{width:"30%"}}>Sign Up</button>
                </div>
                <p className="forgot-password text-right" style={{marginTop:"5px"}}>
                Already registered <Link to="/login" style={{color:"blue"}}>sign in?</Link>
                </p>
            </form>
            </div>
        );
    }
}

export default withRouter(Register);