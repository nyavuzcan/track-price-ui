import React from 'react';
import {Link, withRouter,BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Navbar = () => {

    
return(
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <Link className="nav-link" to="/">Ana Sayfa</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/login">Login</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/register">Register</Link>
//       </li>
 
//     </ul>
//   </div>
// </nav>
<div>
  <header className="navbar">
    <h1 style={{marginTop:"10px"}}>PRICE TRACKING</h1>
      <nav>
      <a href="/">Homepage</a>
      <a href="/login">Login</a>
      <a href="register">Register</a>
      </nav>
   
  </header>
</div>
)

}

export default withRouter(Navbar);