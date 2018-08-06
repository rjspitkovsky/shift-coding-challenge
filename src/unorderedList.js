import React from 'react';
import './App.css'

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
        // debugger
          document.getElementById("splits").removeChild(li)
      }
    }
  })

    this.props.sendStatusToTimer()

  //          const li = document.createElement("li")
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
  //                    const li = lis[i]
  //                 if (li.className !== "clicked" && Number(li.innerHTML) > Number(this.innerHTML)) {
  //
  //                   document.getElementById("splits").removeChild(li)
  //                 }
  //                 }
  //           })
  //         })
  //       }


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
