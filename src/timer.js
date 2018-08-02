import React from 'react';
import './App.css'

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: {seconds:0},
      status: 'off'
    }
  }

  startTimer = (event) => {
    event.preventDefault()

    if (this.state.status === "off") {

      this.setState({
        status: "on"
      })
    //   const intervalId = setInterval(() => this.setState({
    //   timer: {seconds: this.state.timer.seconds + 1}
    // }), 1000)
    // debugger
    const interval = setInterval(function() {
      const p = document.getElementById("secondsTimer")

      if (document.getElementsByClassName("clicked").length === 0)
      p.innerHTML = Number(p.innerHTML) + 1

      // this.setState({
      //   timer: {seconds: Number(p.innerHTML) + 1}
      // })
      if (document.getElementsByClassName("clicked").length > 0)
      clearInterval(interval)
      p.innerHTML = Number(p.innerHTML) 
    }, 1000)
  }
    else if (this.state.status === "on") {
        const li = document.createElement("li")
        const p = document.getElementById("secondsTimer")
        li.innerHTML = Number(p.innerHTML)
        document.getElementById("splits").append(li)
        const lis = document.getElementsByTagName("LI")

      Array.prototype.map.call(lis, li => {

            li.addEventListener('click', function() {

              const p = document.getElementById("secondsTimer")
              p.innerHTML = this.innerHTML
              this.className = "clicked"

              for (let i = 0; i < lis.length; i++) {
                const li = lis[i]
                if (li.className !== "clicked" && Number(li.innerHTML) > Number(this.innerHTML)) {

                  document.getElementById("splits").removeChild(li)
                }
                }
          })
        })
      }
    }

  render() {
  return (
    <div>
    <p>{this.state.status}</p>
    <button onClick={event => this.startTimer(event)}> This is a timer app </button>

    <div>
      <div id="timer">
      <p id="secondsTimer">0</p>
      </div>
      <ul id="splits">

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
