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
import ensureAuth from '../src/config/auth';
import axios from 'axios';


// function UserProfileRoute ({component: Component}, authed, ...rest){
//   return(
//       <Route
//           {...rest}
//           render= {(props) => authed === true
//             ? <Component {...props}/>
//             : <Redirect to={{pathname: "/login/candidate", state: {from: props.location}}} />}
//       />
//   )
// }

// function CompProfileRoute ({component: Component}, authed, ...rest){
//   console.log("inside compprofileroute: ",authed);
//   return(
//       <Route
//           {...rest}
//           render= {(props) => authed === true
//             ? <Component {...props}/>
//             : <Redirect to={{pathname: "/login/employer", state: {from: props.location}}} />}
//       />
//   )
// }
import JobCard from "./component/jobCards/JobCard"
import PeopleCard from "./component/peopleCards/PeopleCard"

class App extends Component {
  state = {
    isLoggedIn: false,
    loading: true
  };

  
  componentWillMount() {
     axios.get('/auth/user').then((data)=>{
      //  console.log(data.data.auth);
       this.setState({isLoggedIn: data.data.auth, loading: false});
     })

  }

  render() {
    console.log('render: '+this.state.authedComp);

    if(this.state.loading) return <div>Loading </div>
    return (
      <Router>
        <div>
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login/candidate" component={Login} />
            <Route exact path="/login/employer" component={EmployerLogin} />
            <Route exact path="/register/candidate" component={Register} />
            <Route exact path="/register/employer" component={EmployerRegister} />
            <Route exact path="/userProfile" component={Profile} />       
            <Route exact path ="/JobCard" component= {JobCard} />  
            <Route exact path ="/PeopleCard" component= {PeopleCard} />     
            {/* <UserProfileRoute authed={this.state.authedUser} path="/userProfile" component={Profile} /> */}
            <Route path="/compProfile"
                render= {(props) => {
                  console.log(this.state.authedComp)
                  return this.state.isLoggedIn === true
                  ? <CompProfile {...props}/>
                  : <Redirect to={{pathname: "/", state: {from: props.location}}} />
                }
                }
            />
            <Route path="/userProfile"
                render= {(props) => {
                  console.log(this.state.authedComp)
                  return this.state.isLoggedIn === true
                  ? <Profile {...props}/>
                  : <Redirect to={{pathname: "/", state: {from: props.location}}} />
                }
                }
            />
           
            {/* <CompProfileRoute authed={this.state.authedComp} path="/compProfile" component={CompProfile} /> */}
            {/* <Route exact path="/compProfile" component={CompProfile} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
