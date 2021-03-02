import React, { Component } from 'react'
import ClearCompleted from './ClearCompleted'
import Status from './Status'

class ToolsOfApp extends Component {
  changeStatus = status => {
    this.props.changeStatus(status)
  }

  clearCompleted = () => {
    this.props.clearCompleted()
  }

  render() {
    const { status, currentStatus } = this.props

    return (
      <div>
        <Status
          key={0}
          status={{ id: 0, name: 'All Tasks', completed: null }}
          currentStatus={currentStatus}
          changeStatus={this.changeStatus}
        />

        {
          status.map(status => (
            <Status
              key={status.id}
              status={status}
              currentStatus={currentStatus}
              changeStatus={this.changeStatus}
            />
          ))
        }

        <ClearCompleted
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default ToolsOfApp
