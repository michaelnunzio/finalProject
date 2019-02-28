
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from "../nav/navBar"
// import "./userProfile.css";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



export default class companyHomePage extends Component{
// componentWillMount(){

// }
        render(props){
            console.log(props)
        return(
            <React.Fragment>
           <NavBar/>
            <div className="jumbotron center">
                <div className="container">
                    <h1 className="display-3">Welcome, {this.props.user} </h1>
                    <p>Welcome to your company profile</p>
                </div>
            </div>
            </React.Fragment>
        )
    }
}


