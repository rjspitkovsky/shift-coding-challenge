import React from 'react';

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 0,
      status: 'off'
    }
  }

  changeTime = () => {
    this.setState({
      timer: ++this.state.timer
    })
  }

  startTimer = (event) => {
    event.preventDefault()

    if (this.state.status === "off") {

      this.setState({
        status: "on",
        timer: setInterval(() => this.changeTime(), 1000)
      })
    }
    else if (this.state.status === "on") {
      const timerValue = this.state.timer
        document.getElementById("splits").append(`${this.state.timer}`)
      }

    }



  render() {
  return (
    <div>
    <p>{this.state.status}</p>
    <button onClick={event => this.startTimer(event)}> This is a timer app </button>
    <div>
      <div id="timer">
      {(this.state.timer !== 0) ? <p>{this.state.timer}</p> : null}
      </div>
      <ul id="splits">

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
