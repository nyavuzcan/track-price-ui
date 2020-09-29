import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Register from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import "./App.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
         <div className="container mt-2">
      <Switch>
        <Route component={HomePage} path='/' exact/>
        <Route component={Login} path='/login' exact/>
        <Route component={Register} path='/register' />
        
        </Switch>
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
