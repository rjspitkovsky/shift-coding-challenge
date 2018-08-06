import React from 'react';
import './styles/unorderedList.css'

class UnorderedList extends React.Component {

  resetTimer = (event) => {
    event.preventDefault()
    event.target.className = "clicked"
    var splitTime = Number(event.target.innerText)
    var lis = document.getElementsByTagName("li")
    Array.prototype.map.call(lis, li => {
      for (let i = 0; i < lis.length; i++) {
        const li = lis[i]
      if (li.className !== "clicked" && splitTime < Number(li.innerText)) {
          document.getElementById("splits").removeChild(li)
      }
    }
  })
    this.props.sendStatusToTimer()
  }

  displayListItems = () => {
  const splitList = this.props.clickedSeconds.map((second, index) => {
    return (
    <li key={index}><button onClick={event => this.resetTimer(event)}>{second}</button></li>
  )
  })
  return splitList
}

  render() {
    return (
      <ul id="splits">{this.displayListItems()}</ul>
    )
  }
}

export default UnorderedList
