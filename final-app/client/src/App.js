import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./component/homepage/homepage";
import Login  from "./component/login/login";
import EmployerLogin from './component/login/employerLogin';
import Register from "./component/register/register";
import EmployerRegister from './component/register/employerRegister';
import Profile from "./component/userProfile/userProfile";
import CompProfile from './component/compProfile/compProfile';
import JobCard from "./component/jobCards/JobCard"
import PeopleCard from "./component/peopleCards/PeopleCard"

class App extends Component {


  render() {

    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login/candidate" component={Login} />
            <Route exact path="/login/employer" component={EmployerLogin} />
            <Route exact path="/register/candidate" component={Register} />
            <Route exact path="/register/employer" component={EmployerRegister} />
            <Route exact path="/userProfile" component={Profile} />
            <Route exact path="/compProfile" component={CompProfile} /> 
            <Route exact path ="/JobCard" component= {JobCard} />  
            <Route exact path ="/PeopleCard" component= {PeopleCard} />     
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
