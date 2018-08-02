import React from 'react';
import './App.css'

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: {seconds:0, clicked: "no"},
      status: 'off'
    }

  }

  pauseTimer = () => {
    const lis = document.getElementsByTagName("LI")
    if (Array.prototype.some.call(lis, li => {
      li.className === "clicked"
    })) {
      this.setState({
        status: "paused"
      })
    }
  }


//   const interval = setInterval(() => this.setState({
//   timer: {seconds: this.state.timer.seconds + 1, ...this.state.clicked}
// }), 1000)
//
//     changeTimer = () => {interval()}



  // stopTimer = () => clearInterval(() => this.changeTimer())


  startTimer = (event) => {
    event.preventDefault()
    const interval = () => setInterval(() => this.setState({
    timer: {seconds: this.state.timer.seconds + 1, ...this.state.clicked}
  }), 1000)
    if (this.state.status === "off") {

      this.setState({
        status: "on"
      })
      // this.changeTimer()
      interval()
    }
    else if (this.state.status === "paused") {
      const stopInterval = interval()
      clearInterval(stopInterval)
    }


    else if (this.state.status === "on") {
        // clickedSeconds.push(this.state.timer.seconds)
        // const secondSplit = clickedSeconds.map((second) => <li key={second.toString()}>{second}</li>)
        const li = document.createElement("li")
        // li.className = "white"
        // const button = document.createElement("button")
        // const liWithButton = li.appendChild(button)
        li.innerHTML = this.state.timer.seconds
        // clickedSeconds = [...clickedSeconds, ...this.state.timer.seconds]
        // clickedSeconds.push(this.state.timer.seconds)
        // const secondSplits = clickedSeconds.map((second) =>
        //   <li><button onClick={console.log("testing")}>{second}</button></li>
        // )
        // const lis = document.getElementsByTagName("LI")
        //
        // console.log(lis.length)
        // lis.forEach(li => li.addEventListener('click', function() {
        //   console.log(`${li.innerHTML}`)
        // }))
        document.getElementById("splits").append(li)
        // console.log(clickedSeconds)
        // const $ = function (element) {
        //   return document.getElementsByTagName(element)
        // }

        const lis = document.getElementsByTagName("LI")

        // const lis = $("lis")
      //   if (lis.length > 0) {
      //   lis.forEach(function(li) {
      //     li.addEventListener('click', function() {
      //     console.log(`${li.innerHTML}`)
      //   })
      // })
      //   }

      // for (let i = 0; i < lis.length; i++) {
      //   const li = lis[i]
      //   li.onclick =
      //   function splitFunction() {
      //     this.className += "red"
      //   }
      //
      //   li.onclick = splitFunction().bind(this)
      // }

      Array.prototype.forEach.call(lis, li => {



            li.addEventListener('click', function() {
              // pauseTimer()
              const p = document.getElementById("secondsTimer")
              p.innerHTML = this.innerHTML
              this.className = "clicked"
              // if (li.className !== "clicked" && li.innerHTML > this.innerHTML) {
              //   document.getElementById("splits").removeElement("li")
              // }

              for (let i = 0; i < lis.length; i++) {
                const li = lis[i]
                if (li.className !== "clicked" && Number(li.innerHTML) > Number(this.innerHTML)) {

                  document.getElementById("splits").removeChild(li)
                }
                }


            //   clearInterval(this.changeTimer())
            //   this.setState({
            //   status: "paused",
            //   // timer: {seconds: li.innerHTML}
            // })


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
      {(this.state.timer.seconds !== 0) ? <p id="secondsTimer">{this.state.timer.seconds}</p> : <p>0</p>}
      </div>
      <ul id="splits">

      </ul>
      </div>
      </div>
  )
}
}

export default Timer
