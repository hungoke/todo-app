import React, { Component } from 'react'

class ClearCompleted extends Component {
  clearCompleted = () => {
    this.props.clearCompleted()
  }
  render() {
    return (
      <span>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </span>
    )
  }
}

export default ClearCompleted
