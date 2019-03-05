
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from "../nav/navBar"
import SideNav from '../sideNav/sideNav'
import './compProfile.css'

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
           <NavBar company={this.state.user}/>
          
            <div className="cJtron center  welcomeN">
                <div className="container">
                    <h1>Welcome, {this.state.user} </h1>
                    <p>Welcome to your company profile</p>
                </div>
            </div>

        <SideNav/>
            </React.Fragment>
        )
    }
}


