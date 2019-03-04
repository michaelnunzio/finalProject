import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../nav/navBar';
import ResultsCard from "../resultsCards/resultsCards"; 

export default class ResultsForUser extends Component{
    state={
        candy:'',
        matchArray: []
    }
    componentWillMount(){

        axios.get('/auth/user').then((data)=>{
          this.setState({
            candy: data.data.user._id,
            matchArray: data.data.user.match
          })
            console.log(this.state.candy)
            console.log(this.state.matchArray)
            console.log(this.state.matchArray[0])
        })

      }

      componentDidMount() {
        axios.get("/employ/5c7c65d94f288a1a3c3cb0c0")
        .then((response) => {
          console.log(response.data)
        }).catch((error) => {
            console.error(error);
        });

      }


    //   componentDidMount() {
    //     axios.get("/employ/" + this.state.matcharray[0])
    //         .then((response) => {
    //           console.log(response.data)
    //             this.setState({
    //                 cards: response.data
    //             });
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    //  }

        render(){
        return(
        
                <NavBar />
        
        )
        }
}

// export default homePage;