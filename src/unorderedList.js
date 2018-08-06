import React from 'react';
import './App.css'

class UnorderedList extends React.Component {

  resetTimer = (event) => {
    event.preventDefault()
    event.target.className = "clicked"
    var splitTime = Number(event.target.innerText)
    Array.from(document.getElementsByTagName("li")).filter(li => Number(li.innerText) > splitTime)
    this.props.sendStatusToTimer(splitTime)
    // debugger
    // var lis = document.getElementsByTagName("li")
    // Array.from(lis).forEach(function(li) {
    //   if (li.className !== "clicked" && li.innerText > splitTime) {
    //     document.getElementById("splits").removeElement(li)
    //   }
    // })
    // const lis = document.getElementsByTagName("LI")
    // debugger
    // Array.prototype.forEach.call(lis, li => {
    //   for (let i = 0; i < lis.length; i++) {
    //     const li = lis[i]
    //     if (li.className !== "clicked" && Number(li.innerHTML) > Number(event.target.innerHTML)) {
    //       document.getElementById("splits").removeElement(li)
    //     }
    //   }
    // })
  }

  displayListItems = () => {
  const splitList = this.props.clickedSeconds.map((second, index) => {
    return (<div key={index}>
    <li><button onClick={event => this.resetTimer(event)}>{second}</button></li>
  </div>)
  })
  return splitList
}

  render() {
    return (
      <div>
      <ul id="splits">{this.displayListItems()}</ul>
      </div>
    )
  }
}

export default UnorderedList
