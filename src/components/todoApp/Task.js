import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'

class Task extends React.Component {
  render() {
    const { task } = this.props

    return (
      <TodoAppContext.Consumer>
        {
          todoAppContext => (
            <div>
              <label className={task.completed === true ? 'line-throught' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed === true}
                  onChange={() => { todoAppContext.completedTask(task) }}
                />
                {task.name}
              </label>

              <button onClick={() => { todoAppContext.deleteTask(task) }}>X</button>
            </div>
          )
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default Task
