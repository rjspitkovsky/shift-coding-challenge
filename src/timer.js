import React from 'react';
import Button from './button'
import UnorderedList from './unorderedList'
import './styles/timer.css'

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      clickedSeconds: [],
      seconds: 0,
      status: "off"
    }
  }

  sendStatusToTimer = () => {
    if (this.state.status === "off") {
      this.setState({
        status: "on"
      })
    } else {
      this.setState({
        status: "off"
      })
    }
    const nextSecond = this.state.seconds
    const startTimer = () => {
      this.state.status === "on" ? this.setState({seconds: nextSecond++}) : clearInterval(myInterval)
    }
    const myInterval = setInterval(startTimer, 1000)
    this.setSecond()
  }

  setSecond = () => {
    const clickedLength = document.getElementsByClassName("clicked").length
    if (clickedLength > 0) {
      const clicked = Number(document.getElementsByClassName("clicked").item(clickedLength - 1).innerText)
      this.setState({seconds: clicked})
    }
  }

  addClickedSecond = () => {
    const addSecond = () => {
      return [...this.state.clickedSeconds, this.state.seconds]
    }
    this.setState({clickedSeconds: addSecond()})
  }

  render() {
    return (
      <div>
        <h1>SHIFT MARKETS TIMER CHALLENGE</h1>

        <h3>Click the button to start the timer. <br />
        Clicking the button again will record the split time. <br />
        Clicking a split time will reset the timer and delete slower splits.</h3>

        <Button addClickedSecond={this.addClickedSecond} status={this.state.status} sendStatusToTimer={this.sendStatusToTimer}/>

        <p>{this.state.seconds} {this.state.seconds < 2 ? "second" : "seconds"}</p>

          {this.state.clickedSeconds.length > 0 ?
          <UnorderedList sendStatusToTimer={this.sendStatusToTimer} clickedSeconds={this.state.clickedSeconds}/> : null}
      </div>
    )
  }

}

export default Timer
