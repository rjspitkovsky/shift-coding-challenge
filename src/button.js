import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      status: "off"
    }
  }

  manageTimer = (event) => {
    event.preventDefault()
    var status = this.state.status
    if (status === "off") {
      this.props.sendStatusToTimer(status)
      this.setState({
        status: "on"
      })
    }
    if (status === "on") {
      this.props.sendStatusToTimer(status)
    }
  }

  render() {
    return (
      <button onClick={event => this.manageTimer(event)}>click me!</button>
    )
  }
}

export default Button
