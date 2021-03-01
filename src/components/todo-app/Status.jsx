import React, { Component } from 'react'

class Status extends Component {
  changeStatus = () => {
    const { status } = this.props
    this.props.changeStatus(status)
  }

  render() {
    const { status, currentStatus } = this.props

    return (
      <span>
        <label>
          <input
            type="radio"
            name="status"
            checked={status.id === currentStatus}
            onChange={this.changeStatus}
          />
          {status.name}
        </label>
      </span>
    )
  }
}

export default Status
