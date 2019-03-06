import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../nav/navBar';
import ResultsCard from "../resultsCardsEmploy/resultsCards";


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
            cInd: data.data.user.desc
          })
          console.log(this.state.cInd)
            console.log(this.state.candy)
            console.log(this.state.matchArray)
            console.log(this.state.matchArray[0])

          this.state.matchArray.map(job => 
            axios.get("/cand/" + job)
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
        })

      }


        render(){
        return(
          

    <React.Fragment>


  <div className='container-fluid cPage'>

    <div className='row newNn'>
      <NavBar company= {true}/>

    </div>

          <br></br>

        <div className='row'>
            <div className='col l4 offset-l4 col m6 offset-m3 col s8 offset-s2 checkOut'>Check Out Your Matches! *this is the employer*</div>
        </div>

        <div className='row'>
        <div className='col l6 offset-l3 ol m8 offset-m2 col s10 offset-s1'>
         {this.state.allMatches.map(comp=> (
          <ResultsCard
            email={comp.email}
            first={comp.first}
            last={comp.last}
            title={comp.title}

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