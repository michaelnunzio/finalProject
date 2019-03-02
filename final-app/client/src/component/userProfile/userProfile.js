import React, { Component } from 'react';
import axios from 'axios';
import "./userProfile.css";
import NavBar from '../nav/navBar';
import SideNav from '../sideNav/sideNav'

export default class homePage extends Component{
    state={
        candy:''
    }
    componentWillMount(){

        axios.get('/auth/user').then((data)=>{
          this.setState({
              candy: data.data.user.first + ' ' + data.data.user.last
          })
            console.log('from state Candy Name: ', this.state.candy)
        })
      }

        render(){
        return(
            <React.Fragment>
                <NavBar />
                <div className="jumbotron center welcomeN">
                    <div className="container">
                        <h1 className="display-3">Welcome, {this.state.candy}</h1>
                        <p>Welcome to your profile
                        </p>
                    </div>
                </div>
                <SideNav/>
            </React.Fragment>
        )
        }
}

// export default homePage;