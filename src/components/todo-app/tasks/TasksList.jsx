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
    const { currentStatus } = this.props

    switch (currentStatus) {
      case 1:
        return this.filteredByTag.filter(task => task.completed === false)
      case 2:
        return this.filteredByTag.filter(task => task.completed === true)
      default:
        return this.filteredByTag
    }
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

  counter = () => {
    const tasksCompleted = this.filteredByTagAndStatus.filter(task => task.completed === true)

    return tasksCompleted.length
  }

  render() {
    const { status, currentStatus, tasks } = this.props

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
          totalTasks={this.filteredByTagAndStatus.length}
          totalTasksCompleted={this.counter()}
        />
      </div>
    )
  }
}

export default TasksList
