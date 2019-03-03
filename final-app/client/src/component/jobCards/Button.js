import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js'
import axios from "axios"; 

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

export default class Button extends Component {
  constructor() {
    super()
    this.state = {
      pressed: false, 
      candy: ""
    }
  }

  componentWillMount(){

    axios.get('/auth/user').then((data)=>{
      this.setState({
          candy: data.data.user._id
          
      })
        // console.log('from state Candy Name: ', this.state.candy)
        console.log(this.state.candy)
    })
  }

  componentDidMount() {
    requestAnimationFrame(animate);
  }

  handleClick(event) {
    if (this.props.animationInProgress === false) {
      this.props.toggleAnimationInProgress(true)
      let currentCard = document.getElementsByClassName('Card')[this.props.cards.length - 1]
      let leftBound = -1 * window.innerWidth
      let rightBound = window.innerWidth + 250
      let leftOrRight = this.props.posOrNeg === "positive" ? rightBound : leftBound

      var tween = new TWEEN.Tween({x: 0, y: 0})
      tween.to({ x: leftOrRight, y: -100 }, 450)
      tween.onUpdate(function () {
        currentCard.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
      })
      tween.onComplete(() => {
        this.props.shiftCard()
        this.props.toggleAnimationInProgress(false)
      })
      tween.start();
    }
  }

  handleMouseDown = (event)=> {

    if(this.props.posOrNeg === "positive") {
      console.log("this is true")

      axios.post('/allcandsy', {
      candy: this.state.candy, 
      jobcards: this.props.cards[0]

      }).then((data)=>{
       console.log(data)
      })
    }


    if(this.props.posOrNeg === "negative") {
      console.log("this is negative")

    }

    


    this.setState({pressed: true})
  }

  // handleMouseUp(event) {
  //   this.setState({pressed: false})
  // }

  render() {
    let dynamicStyle
    if (this.state.pressed) {
        dynamicStyle = {boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.2)'}
    }
    console.log(this.props)
    console.log(this.props.cards[0])
    
    return (
      // <div className={"button " + this.props.posOrNeg} onClick={this.handleClick.bind(this)} onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} onMouseLeave={this.handleMouseUp.bind(this)} onTouchStart={this.handleMouseDown.bind(this)} onTouchEnd={this.handleMouseUp.bind(this)} onTouchCancel={this.handleMouseUp.bind(this)} style={dynamicStyle}>
      //   <i className={"fa fa-" + this.props.heartOrTimes + " fa-5x"} />
      // </div>
      <div className={"button " + this.props.posOrNeg} onClick={this.handleClick.bind(this)} onMouseDown={this.handleMouseDown}  onTouchStart={this.handleMouseDown.bind(this)} style={dynamicStyle}>
        <i className={"fa fa-" + this.props.heartOrTimes + " fa-5x"} />
      </div>
    )
  }
}

