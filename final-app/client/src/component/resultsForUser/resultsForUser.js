import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../nav/navBar';
import ResultsCard from "../resultsCards/resultsCards";
import "./results.css"

export default class ResultsForUser extends Component{
    state={
        candy:'',
        matchArray: [], 
        allMatches: []
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

          this.state.matchArray.map(job => 
            axios.get("/employ/" + job)
            .then((response) => {
              console.log(response.data)
              this.setState ({
                allMatches: this.state.allMatches.concat(response.data)
              })
              console.log(this.state.allMatches)
            }).catch((error) => {
                console.error(error)
            })
            
            
            
            
            )

            // axios.get("/employ/" + this.state.matchArray[0])
            // .then((response) => {
            //   console.log(response.data)
            // }).catch((error) => {
            //     console.error(error);
            // });



        })

      }

    //   componentDidMount() {
    //     axios.get("/employ/5c7c65d94f288a1a3c3cb0c0")
    //     .then((response) => {
    //       console.log(response.data)
    //     }).catch((error) => {
    //         console.error(error);
    //     });

    //   }


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

            <div>
         <NavBar/>
         <div>
            Wow! Check your matches!
        </div>

         {this.state.allMatches.map(comp=> (
          <ResultsCard
        
            company={comp.company}
            email={comp.email}
            first={comp.first}
            last={comp.last}
            industry={comp.industry}
            
          />
        ))}




          </div>
        
        
                

        
        )
        }
}

// export default homePage;