import React from 'react';
import "./styles/button.css"

class Button extends React.Component {
  manageTimer = (event) => {
    event.preventDefault()
    if (this.props.status === "off") {
      this.props.sendStatusToTimer()
    }
    else (this.props.status === "on") {
      this.props.addClickedSecond()
    }
  }

  render() {
    return (
      <button onClick={event => this.manageTimer(event)}>Start Timer!</button>
    )
  }
}

export default Button
