import React, { Component } from 'react'
import ToolsOfApp from '../toolsOfApp/ToolsOfApp'
import Task from './Task'

class TasksList extends Component {
  get filteredByTag() {
    const { currentTag, tasks } = this.props

    if (currentTag === 0) {
      return tasks
    }

    return tasks.filter(task => task.tag === currentTag)
  }

  get filteredByTagAndStatus() {
    const { status, currentStatus } = this.props
    const getStatus = status.find(status => status.id === currentStatus)

    if (currentStatus === 0) {
      return this.filteredByTag
    }

    return this.filteredByTag.filter(task => task.completed === getStatus.completed)
  }

  deleteTask = task => {
    this.props.deleteTask(task)
  }

  completeTask = task => {
    this.props.completeTask(task)
  }

  changeStatus = status => {
    this.props.changeStatus(status)
  }

  clearCompleted = () => {
    this.props.clearCompleted(this.filteredByTagAndStatus)
  }

  render() {
    const { status, currentStatus } = this.props
    return (
      <div>
        {
          this.filteredByTagAndStatus.map((task, index) => (
            <Task
              key={index}
              task={task}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
          ))
        }

        <ToolsOfApp
          status={status}
          currentStatus={currentStatus}
          changeStatus={this.changeStatus}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default TasksList
