import React from 'react';

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: {seconds:0, clicked: "no"},
      status: 'off'
    }

  }



  changeTimer = () => setInterval(() => this.setState({
    timer: {seconds: this.state.timer.seconds + 1}
  }), 1000)
    // setInterval
    // this.setState({
    //   timer: {seconds: ++this.state.timer}

    // })


  startTimer = (event) => {
    event.preventDefault()

    if (this.state.status === "off") {

      this.setState({
        status: "on",
        // timer: setInterval(() => this.changeTime(), 1000)
      })
      this.changeTimer()
    }
    else if (this.state.status === "on") {
        // this.setState({
        //   timer: {...this.state.timer,
        //   clicked: "yes"}
        // })
        // const secondSplits = clickedSeconds.map((second) =>
        //   <li><button onClick={console.log("testing")}>{second}</button></li>
        // )

        document.getElementById("splits").append(`${this.state.timer.seconds}`)
      }

    }



  render() {
  return (
    <div>
    <p>{this.state.status}</p>
    <button onClick={event => this.startTimer(event)}> This is a timer app </button>
    <div>
      <div id="timer">
      {(this.state.timer.seconds !== 0) ? <p>{this.state.timer.seconds}</p> : null}
      </div>
      <ul id="splits">

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
