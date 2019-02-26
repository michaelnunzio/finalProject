
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from "../nav/navBar"
// import "./userProfile.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";



export default class companyHomePage extends Component{
    componentDidMount() {
        axios.get(`/compProfile`)
            .then((response) => {
                this.setState({
                    data: response.data
                });
                console.log('--------------------------')
                console.log('datadatadata',response.data)
                console.log('--------------------------')
            }).catch((error) => {
                console.error(error);
            });
     }
        render(){
        return(
            <React.Fragment>
           <NavBar/>
            <div class="jumbotron center">
                <div class="container">
                    <h1 class="display-3">Welcome</h1>
                    <p>Welcome to your company profile
                    </p>
                </div>
            </div>
            </React.Fragment>
        )
    }
}


