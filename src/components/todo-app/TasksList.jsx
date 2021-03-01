import React, { Component } from 'react'
import Task from './Task'

class TasksList extends Component {
  filteredByTag = () => {
    const { currentTag, tasks } = this.props
    if (currentTag === 0) {
      return tasks
    }

    return tasks.filter(task => task.tag === currentTag)
  }

  filteredByStatus = () => {
    const { status, currentStatus } = this.props
    const getStatus = status.find(status => status.id === currentStatus)

    if (currentStatus === 0) {
      return this.filteredByTag()
    }

    return this.filteredByTag().filter(task => task.completed === getStatus.completed)
  }

  deleteTask = task => {
    this.props.deleteTask(task)
  }

  completeTask = task => {
    this.props.completeTask(task)
  }


  render() {
    return (
      <div>
        {
          this.filteredByStatus().map((task, index) => (
            <Task
              key={index}
              task={task}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
          ))
        }
      </div>
    )
  }
}

export default TasksList
