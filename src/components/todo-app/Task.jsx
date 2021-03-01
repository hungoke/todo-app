import React, { Component } from 'react'

class Task extends Component {
  deleteTask = () => {
    const { task } = this.props
    this.props.deleteTask(task)
  }

  completeTask = () => {
    const { task } = this.props
    this.props.completeTask(task)
  }

  render() {
    const { task } = this.props

    return (
      <div>
        <label className={task.completed === true ? "line-through" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={this.completeTask}
          />
          {task.name}
        </label>
        <button onClick={this.deleteTask}>X</button>
      </div>
    )
  }
}

export default Task
