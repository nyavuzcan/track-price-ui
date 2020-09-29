import React, { Component } from "react";
import Input from "./Input"

export default class Login extends Component {
    state={
        email: null,
        password: null
    }
    onChange = (e) =>{
        const{name,value} = e.target
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <div className="login-form-container">
            <form>
                <h3>Sign In</h3>
                <Input label="Email address" type="text" name="email" className="form-control" placeholder="Email address" onChange={this.onChange} />
                <Input label="Password" type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChange} />

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={this.onChange} />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                <button type="submit" className="btn btn-dark btn-block" style={{width:"25%"}}>Submit</button>
                </div>
        
                <p className="forgot-password text-right">
                    Forgot <a href="#" style={{color:"blue"}}>password?</a>
                </p>
            </form>
            </div>
        );
    }
}