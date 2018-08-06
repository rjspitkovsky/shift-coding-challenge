// import React from 'react';
// import './App.css'
//
// class Timer extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       timer: {seconds:0},
//       status: 'off'
//     }
//   }
//
//   startTimer = (event) => {
//     event.preventDefault()
//     // start timer until the first click
//     let timesClicked = 0
//     timesClicked++
//
//     if (this.state.status === "off") {
//
//       this.setState({
//         status: "on"
//       })
//     const interval = setInterval(function() {
//       const p = document.getElementById("secondsTimer")
//
//       if (document.getElementsByClassName("clicked").length === 0)
//       p.innerHTML = Number(p.innerHTML) + 1
//       if (document.getElementsByClassName("clicked").length > 0)
//       clearInterval(interval)
//     }, 1000)
//   }
//   if (document.getElementsByClassName("clicked").length > 0 && this.state.status === "on") {
//
//     this.setState({
//       status: "off"
//     })
//     // this restarts the interval if the timer is clicked after a split reset
//     const newInterval = setInterval(function() {
//       const p = document.getElementById("secondsTimer")
//       const clickedSplits = document.getElementsByClassName("clicked").length
//       if (document.getElementsByClassName("clicked").length === clickedSplits)
//       p.innerHTML = Number(p.innerHTML) + 1
//
//       if (document.getElementsByClassName("clicked").length > clickedSplits)
//       clearInterval(newInterval)
//       // p.innerHTML = Number(p.innerHTML)
//     }, 1000)
//   }
//     if ((this.state.status === "on" || this.state.status === "off") && Number(document.getElementById("secondsTimer").innerHTML) !== 0) {
//       // This should work no matter how many splits have been clicked
//         const li = document.createElement("li")
//         const p = document.getElementById("secondsTimer")
//         li.innerHTML = Number(p.innerHTML)
//         document.getElementById("splits").append(li)
//         const lis = document.getElementsByTagName("LI")
//
//       Array.prototype.map.call(lis, li => {
//
//             li.addEventListener('click', function() {
//
//               const p = document.getElementById("secondsTimer")
//               p.innerHTML = this.innerHTML
//               this.className = "clicked"
//
//               for (let i = 0; i < lis.length; i++) {
//                 const li = lis[i]
//                 if (li.className !== "clicked" && Number(li.innerHTML) > Number(this.innerHTML)) {
//
//                   document.getElementById("splits").removeChild(li)
//                 }
//                 }
//           })
//         })
//       }
//
//     }
//
//   render() {
//   return (
//     <div>
//     {/*<p>{this.state.status}</p>*/}
//     <button onClick={event => this.startTimer(event)}> This is a timer app </button>
//
//     <div>
//       <div id="timer">
//       <p id="secondsTimer">0</p>
//       </div>
//       <ul id="splits">
//
//       </ul>
//       </div>
//       </div>
//   )
// }
// }
//
// export default Timer

import React from 'react';
import Button from './button'
import UnorderedList from './unorderedList'

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
    var nextSecond = this.state.seconds
    var startTimer = () => {
      this.setState({
        seconds: nextSecond++,
      })
    }
    this.setState({
      status: "on"
    })
    var myInterval = setInterval(startTimer, 1000)


  // var addClickedSecond = () => {
  //   return [...this.state.clickedSeconds, this.state.seconds]
  // }
  //
  //   if (status === "on") {
  //     this.setState({
  //       clickedSeconds: addClickedSecond()
  //     })
  //     console.log(this.state.clickedSeconds)
  //   }
  }
  addClickedSecond = () => {
    var addSecond = () => {
      return [...this.state.clickedSeconds, this.state.seconds]
    }
    this.setState({
      clickedSeconds: addSecond()
    })
    console.log(this.state.clickedSeconds)
  }

  render() {
    return (
      <div>
      <Button addClickedSecond={this.addClickedSecond} status={this.state.status} sendStatusToTimer={this.sendStatusToTimer}/>
      <p>{this.state.seconds} {this.state.seconds < 2 ? "second" : "seconds"}</p>
      {this.state.clickedSeconds.length > 0 ?
      <UnorderedList clickedSeconds={this.state.clickedSeconds}/> : null}
      </div>
    )
  }

}

export default Timer
