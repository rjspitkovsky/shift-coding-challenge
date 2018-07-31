import React from 'react';

class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 0,
      status: 'off'
    }
  }

  render() {
  return (
    <div>
    <button> This is a timer app </button>
    <div>
      <h3>{this.state.timer}</h3>
      <ul>
      
      </ul>
      </div>
      </div>
  )
}
}

export default Timer
