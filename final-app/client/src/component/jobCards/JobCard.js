import React, { Component } from 'react'
import Buttons from './Buttons'
import CardDeck from './CardDeck'
import Title from "./Title"
import axios from 'axios'
import NavBar from '../nav/navBar'



const IMAGE_URLS = [
  {
  "company": "Amazon", 
  "description": "web developer", 
  "requirements": "Strong Proficiency in Javascript, including DOM Manipulation and the JavaScript Object Model. Thorough understanding of React.js and its core principles. Familiarity with newer specifications of ECMAScript. Knowledge of isomorphic React is a plus. Familiarity with Modern front-end build pipelines and tools. Experience with Data Structure libraries (e.g Immutable.js). Working Knowledge of GitHub. Experience with REST API’s. Knowledge of Modern Authorization mechanisms, such as JSON Web Token and OAuth. The desire to jump into Full Stack Development when necessary"
      },
      {
        "company": "Google", 
        "description": "web developer", 
        "requirements": "Strong Proficiency in Javascript, including DOM Manipulation and the JavaScript Object Model. Thorough understanding of React.js and its core principles. Familiarity with newer specifications of ECMAScript. Knowledge of isomorphic React is a plus. Familiarity with Modern front-end build pipelines and tools. Experience with Data Structure libraries (e.g Immutable.js). Working Knowledge of GitHub. Experience with REST API’s. Knowledge of Modern Authorization mechanisms, such as JSON Web Token and OAuth. The desire to jump into Full Stack Development when necessary"
            },
            {
              "company": "Walmart", 
              "description": "web developer", 
              "requirements": "Strong Proficiency in Javascript, including DOM Manipulation and the JavaScript Object Model. Thorough understanding of React.js and its core principles. Familiarity with newer specifications of ECMAScript. Knowledge of isomorphic React is a plus. Familiarity with Modern front-end build pipelines and tools. Experience with Data Structure libraries (e.g Immutable.js). Working Knowledge of GitHub. Experience with REST API’s. Knowledge of Modern Authorization mechanisms, such as JSON Web Token and OAuth. The desire to jump into Full Stack Development when necessary"
                  },
                  {
                    "company": "Netflix", 
                    "description": "web developer", 
                    "requirements": "Strong Proficiency in Javascript, including DOM Manipulation and the JavaScript Object Model. Thorough understanding of React.js and its core principles. Familiarity with newer specifications of ECMAScript. Knowledge of isomorphic React is a plus. Familiarity with Modern front-end build pipelines and tools. Experience with Data Structure libraries (e.g Immutable.js). Working Knowledge of GitHub. Experience with REST API’s. Knowledge of Modern Authorization mechanisms, such as JSON Web Token and OAuth. The desire to jump into Full Stack Development when necessary"
                        }]









export default class JobCard extends Component {
  constructor() {
    super()
    this.state = {
      cards: IMAGE_URLS
    }
  }
  

  componentDidMount() {
    axios.get('/allemploy')
        .then((response) => {
          console.log(response.data)
            this.setState({
                cards: response.data
            });
        }).catch((error) => {
            console.error(error);
        });
 }

  
  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

  render() {
    return (
      <div>
        <NavBar/>
      <div className="App">
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
      </div>
    )
  
}

}