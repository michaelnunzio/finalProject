// import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./component/homepage/homepage";
import Login  from "./component/login/login";
import EmployerLogin from './component/login/employerLogin';
import Register from "./component/register/register";
import EmployerRegister from './component/register/employerRegister';
import Profile from "./component/userProfile/userProfile";
import CompProfile from './component/compProfile/compProfile';
// import ensureAuth from '../src/config/auth';
import axios from 'axios';
import JobCard from "./component/jobCards/JobCard"
import PeopleCard from "./component/peopleCards/PeopleCard"


class App extends Component {
  state = {
    isLoggedIn: false,
    loading: true,
  };



  
  componentWillMount() {
     axios.get('/auth/user').then((data)=>{
       console.log(data.data);

       this.setState({
         isLoggedIn: data.data.auth, 
         loading: false,  
        });

     });
  }

  render() {

    console.log('render: '+this.state.isLoggedIn);


    if(this.state.loading) 
    return  <div className="progress">
              <div className="indeterminate"></div>
            </div>
    return (
      <Router>
        <div>
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login/candidate" component={Login} />
            <Route exact path="/login/employer" component={EmployerLogin} />
            <Route exact path="/register/candidate" component={Register} />
            <Route exact path="/register/employer" component={EmployerRegister} />
            <Route path="/userProfile/JobCard"
                render= {(props) => {
                  console.log('inside route tag for user: ',this.state.isLoggedIn)
                  return this.state.isLoggedIn === true
//                   ? <CompProfile {...props} user={this.state.user} />
//                   : <Redirect to={{pathname: "/", state: {from: props.location}}} //
                  ? <JobCard {...props}/>
                  : <Redirect to={{pathname: "/login/candidate", state: {from: props.location}}} />
                }
                }
            />  
            {/* <Route exact path ="/PeopleCard" component= {PeopleCard} /> */}
            <Route path="/compProfile/PeopleCard"
                render= {(props) => {
                  console.log('inside route tag for user: ',this.state.isLoggedIn)
                  return this.state.isLoggedIn === true
                  ? <PeopleCard {...props}/>
                  : <Redirect to={{pathname: "/login/employer", state: {from: props.location}}} />
                }
                }
            />       
            {/* <UserProfileRoute component={Profile} authed={this.state.isLoggedIn} path="/userProfile" />
            <CompProfileRoute component={CompProfile} authed={this.state.isLoggedIn} path="/compProfile" /> */}
            <Route path="/userProfile"
                render= {(props) => {
                  console.log('inside route tag for user: ',this.state.isLoggedIn)
                  return this.state.isLoggedIn === true
                  ? <Profile {...props} />
                  : <Redirect to={{pathname: "/login/candidate", state: {from: props.location}}} />
                }
                }
            />
            <Route path="/compProfile"
                render= {(props) => {
                  console.log('inside route tag for comp: ',this.state.isLoggedIn)
                  return this.state.isLoggedIn === true
                  ? <CompProfile {...props} />
                  : <Redirect to={{pathname: "/login/employer", state: {from: props.location}}} />
                }
                }
            />
            <Route path='/userProfile/editProfile'
                render= {(props) => {
                  console.log('inside route tag for comp: ',this.state.isLoggedIn)
                  return this.state.isLoggedIn === true
                  ? <CompProfile {...props} />
                  : <Redirect to={{pathname: "/login/candidate", state: {from: props.location}}} />
                }
                }
              />
           
            {/* <Route exact path="/compProfile" component={CompProfile} /> */}
          </Switch>
        </div>
      </Router>
    )
              
  }
}

export default App;
