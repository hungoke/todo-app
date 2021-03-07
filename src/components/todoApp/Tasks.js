import React from 'react'
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

  }

  render() {
    return (
      <>
        {
          this.filterByTag.map(task => (
            <Task
              key={task.id}
              task={task}
            />
          ))
        }
      </>
    )
  }
}

Tasks.contextType = TodoAppContext

export default Tasks
