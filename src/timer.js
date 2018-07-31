import React from 'react';

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 0,
      status: 'off'
    }
  }

  startTimer = (event) => {
    event.preventDefault()
    document.getElementById("timer").append(this.state.timer)
    if (this.state.status === "off") {
    this.setState({
      status: "on",
      timer: setInterval(() => this.setState({
        timer: this.state.timer + 1
      }), 1000)
    })
  }
    else if (this.state.status === "on") {
      this.setState({
        status: "paused",
        timer: this.state.timer
      })
    }
    }


  render() {
  return (
    <div>
    <button onClick={event => this.startTimer(event)}> This is a timer app </button>
    <div>
      <h3 id="timer"></h3>
      <p>{this.state.status}</p>
      <ul>

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
