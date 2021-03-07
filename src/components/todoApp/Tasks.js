import React from 'react'
import TasksListContext from '../../context/TasksListContext'
import ToolsOfApp from './ToolsOfApp'
import { TodoAppContext } from '../../context/TodoAppContext'
import './../../App.css'
import Task from './Task'

class Tasks extends React.Component {
  get filteredByTag() {
    const { tasks, currentTag, tags } = this.context
    let tagName = ''

    if (currentTag === 0) {
      return tasks
    } else {
      tags.forEach(tag => {
        if (tag.id === currentTag) {
          tagName = tag.name
        }
      })
    }

    return tasks.filter(task => task.tag === tagName)
  }

  get filteredByTagAndStatus() {
    const { currentStatus } = this.context

    switch (currentStatus) {
      case 1:
        return this.filteredByTag.filter(task => task.completed === true)
      case 2:
        return this.filteredByTag.filter(task => task.completed === false)
      default:
        return this.filteredByTag
    }
  }

  count = () => {
    let count = 0

    this.filteredByTag.forEach(task => {
      if (task.completed === true) {
        count++
      }
    })

    return count
  }

  render() {
    return (
      <TasksListContext.Provider
        value={{
          filteredTasks: this.filteredByTagAndStatus,
          totalTasks: this.filteredByTag.length,
          totalTasksCompleted: this.count()
        }}>
        {
          this.filteredByTagAndStatus.map(task => (
            <Task
              key={task.id}
              task={task}
            />
          ))
        }
        <ToolsOfApp />
      </TasksListContext.Provider>
    )
  }
}

Tasks.contextType = TodoAppContext

export default Tasks
