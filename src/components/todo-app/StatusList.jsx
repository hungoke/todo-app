import React, { Component } from 'react'
import Status from './Status'

class StatusList extends Component {
  changeStatus = status => {
    this.props.changeStatus(status)
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
      </div>
    )
  }
}

export default StatusList
