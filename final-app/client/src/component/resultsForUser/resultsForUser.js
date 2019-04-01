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
            matchArray: data.data.user.match,
            cName: data.data.user.first
          })
            console.log('HI MY NAME IS',this.state.cName)
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
    <React.Fragment>

      <div className='container-fluid cPage'>

      <div className='row newNn'>
        <NavBar candidate={false}/>

      </div>
            <br></br>

            <div className='row'>
              <div className='col l4 offset-l4 col m8 offset-m2 col s10 offset-s1 checkOut'>
                  Hello, {this.state.cName}!
              </div>
          </div>

          <div className='row'>
              <div className='col l4 offset-l4 col m8 offset-m2 col s10 offset-s1 checkOut'>
                  Check Out Your Matches!
              </div>
          </div>

          <div className='row'>
          <div className='col l6 offset-l3 ol m8 offset-m2 col s10 offset-s1'>
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
              </div>

              <div className='row footNav'>
                          <div className='col l10 offset-l1'>
                              <div className='word2'><span>View Your Matches</span></div> 
                          </div>
                  </div>
          </div>
                
     </React.Fragment>
  )}
}

// export default homePage;