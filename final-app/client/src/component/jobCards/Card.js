import React, { Component } from 'react'
import interact from 'interactjs'
import TWEEN from '@tweenjs/tween.js'
import Button from './Button';

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    let inter = interact('#card' + this.props.idx)
    inter.draggable({
      inertia: true,
      onmove: this.handleDrag.bind(this),
      onend: this.handleDragEnd.bind(this)
    })

    requestAnimationFrame(animate);
  }

  handleDrag (event) {
     var x = (parseFloat(this.state.x) || 0) + event.dx,
         y = (parseFloat(this.state.y) || 0) + event.dy;
     // update the posiion attributes
     this.setState({x, y})
   }

  handleDragEnd(event) {
    let positionX = event.pageX;
    let card = this
    let leftBound = -50
    let rightBound = window.innerWidth + 50

    if (positionX < rightBound && positionX > leftBound) {
      var tween = new TWEEN.Tween({x: this.state.x, y: this.state.y})
      tween.to({ x: 0, y: 0 }, 250)
      tween.onUpdate(function () {
        card.setState({x: this.x, y: this.y})
      })
      tween.start();
    } else if (positionX > rightBound) {
      this.props.shiftCard()
    } else if (positionX < leftBound) {
      this.props.shiftCard()
    }
  }

  render() {
    let {x, y} = this.state
    let cardStyle = {
        transform: 'translate(' + x + 'px, ' + y + 'px)',
    }

    return <div id={"card"+ this.props.idx} className="Card" style={cardStyle} >
      {/* <div>
     {this.props.name}
      </div>
      <br></br>
      <div>
      {this.props.title}
      </div> */}

      {/* <div className ="cardy">
      <ul>
        <li className ="cardy">
          <strong></strong> {this.props.name}
        </li>
        <li className = "cardy">
          <strong>Occupation:</strong> {this.props.title}
        </li>
        <li className = "cardy">
          <strong>Technologies:</strong> {this.props.tech}
        </li>
        <li className = "cardy">
          <strong>Current Company:</strong> {this.props.company}
        </li>
      </ul>
      </div> */}

      <div className ="cardy">
        <ul>
          <li className ="cardy">
            <strong></strong> {this.props.name}
          </li>
          <li className = "cardy">
            <strong>Description:</strong> {this.props.title}
          </li>
          <li className = "cardy">
            <strong>Requirements</strong> {this.props.tech}
          </li>
        </ul>
      </div>
    </div>
  }
}



