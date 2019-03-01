
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from "../nav/navBar"
// import "./userProfile.css";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



export default class companyHomePage extends Component{
    state={
        user:''
    }
    componentWillMount(){
        axios.get('/auth/user').then((data)=>{
          this.setState({
              user: data.data.user.company, 
          })
            console.log('from state Comp Name: ', this.state.user)
        })
      }
        render(props){
            console.log(props)
        return(
            <React.Fragment>
           <NavBar/>
            <div className="jumbotron center">
                <div className="container">
                    <h1 className="display-3">Welcome, {this.state.user} </h1>
                    <p>Welcome to your company profile</p>
                </div>
            </div>
            </React.Fragment>
        )
    }
}


