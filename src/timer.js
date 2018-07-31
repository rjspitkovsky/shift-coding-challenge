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

    if (this.state.status === "off") {
    this.setState({
      status: "click to start timer"
    })
  }
    else if (this.state.status === "click to start timer") {
      this.setState({
        status: "on",
        timer: setInterval(() => this.setState({
          timer: ++this.state.timer
        }), 1000)
      })
    }
    // else if (this.state.status === "on") {
    //   this.setState({
    //     status: "paused",
    //     timer: this.state.timer
    //   })
    // }

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
      <ul>

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
