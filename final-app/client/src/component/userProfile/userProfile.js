import React, { Component } from 'react';
import axios from 'axios';
import "./userProfile.css";
import NavBar from '../nav/navBar';
import CandSnav from '../sideNav/sideNav'

export default class homePage extends Component{
    state={
        candy:'',
        candidate: false
    }
    componentWillMount(){

        axios.get('/auth/user').then((data)=>{
          this.setState({
              candy: data.data.user.first + ' ' + data.data.user.last,
            //   employer: data.data.user.company
          })
            console.log('from state Candy Name: ', this.state.candy)
        })
      }

        render(){
        return(
            <React.Fragment>
                <NavBar candidate={this.state.candidate} />

                <div className="cJtron center welcomeN">
                    <div className="container">
                        <h1 className="display-3">Welcome, {this.state.candy}</h1>
                        <p>Welcome to your profile
                        </p>
                    </div>
                </div>

                <div className='row footNav'>
                    <div className='col l10 offset-l1'>
                        <div className='word2'><span>Welcome To Your Profile</span></div> 
                    </div>
            </div>
                <CandSnav/>
            </React.Fragment>
        )
        }
}

// export default homePage;