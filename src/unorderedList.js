import React from 'react';

class UnorderedList extends React.Component {

  resetTimer = (event) => {
    console.log(event.target.value)
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
      <ul>{this.displayListItems()}</ul>
      </div>
    )
  }
}

export default UnorderedList
