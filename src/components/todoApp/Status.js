import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'

class Status extends React.Component {
  render() {
    const { status } = this.props

    return (
      <TodoAppContext.Consumer>
        {todoAppContext => (
          <span>
            <label>
              <input
                type="radio"
                name="status"
                checked={todoAppContext.currentStatus === status.id}
                onChange={() => { todoAppContext.changeCurrentStatus(status.id) }}
              />
              {status.name}
            </label>
          </span>
        )}
      </TodoAppContext.Consumer>
    )
  }
}

export default Status
