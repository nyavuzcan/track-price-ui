import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';

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
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input required type="text" name="name" className="form-control" placeholder="First name" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input  required type="text" name="surname" className="form-control" placeholder="Last name" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input required type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input required type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Password Repeat</label>
                    <input required onKeyUp={this.onKeyUp} type="password" name="passwordRepeat" className="form-control" placeholder="Enter password" onChange={this.onChange} />
                </div>
              
        <div className="alert alert-danger"  role="alert" style={this.state.visible}>Passwords Doesn't Match</div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                Already registered <Link to="/login">sign in?</Link>
                </p>
            </form>
        );
    }
}

export default withRouter(Register);