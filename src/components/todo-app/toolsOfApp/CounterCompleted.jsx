import React, { Component } from 'react'

class CounterCompleted extends Component {
  render() {
    const { totalTasks, totalTasksCompleted } = this.props
    return (
      <span>
        {totalTasksCompleted}/{totalTasks}
      </span>
    )
  }
}

export default CounterCompleted
