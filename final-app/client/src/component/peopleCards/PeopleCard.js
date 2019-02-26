import React, { Component } from 'react'
import "./App.css";

import Buttons from './Buttons'
import CardDeck from './CardDeck'
import Title from "./Title"

const IMAGE_URLS = [{"name": "leigh", "title": "web developer", "tech": "HTML, JavaScript, CSS", "company": "Amazon" },{"name":"Vinit", "title": "full stack developer", "tech": "Java, JavaScript", "company": "google"},{"name": "mike", "title": "coder", "tech": "vue.js", "company": "netflix"},{"name": "Jimmy", "title": "good at things", "tech": "MERN", "company": "FaceBook"}]

export default class PeopleCard extends Component {
  constructor() {
    super()
    this.state = {
      cards: IMAGE_URLS
    }
  }

  // componentDidUpdate() {
  //   if (this.state.cards.length === 0) this.setState({cards: IMAGE_URLS})
  // }

  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

  render() {
    return (
      <div className="App">
      <Title>J o b  H u n t e r</Title>
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
    )
  
}

}