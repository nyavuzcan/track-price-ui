import React from 'react'
import {Link, withRouter} from 'react-router-dom';

const HomePage = (props) => {

    return (

        <div>
            <div className="text-center">
  <img src="priceTrackLogo.png" className="rounded" alt="..."/>
</div>

<div className="text-center">

<Link  className="nav-link"  className="btn btn-success .btn-lg mr-5" to="/login">Login</Link>
            <Link className="nav-link"  className="btn btn-danger .btn-lg" to="/register">Register</Link>
           
</div>
           
        </div>
        
    )
}

export default HomePage