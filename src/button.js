import React from 'react'

class Button extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     job: null
  //   }
  // }

  // componentDidMount() {
  //   if (this.props.status === "off") {
  //     this.setState({
  //       job: "startTimer"
  //     })
  //   }
  //   else if (this.props.status === "on"){
  //     this.setState({
  //       job: "collectSeconds"
  //     })
  //   }
  // }


  manageTimer = (event) => {
    event.preventDefault()

    if (this.props.status === "off") {
      this.props.sendStatusToTimer()
    }
    else if (this.props.status === "on") {
      this.props.addClickedSecond()
    }
  }

  render() {
    return (
      <button onClick={event => this.manageTimer(event)}>click me!</button>
    )
  }
}

export default Button
