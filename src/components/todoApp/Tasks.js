import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'
import './../../App.css'
import Task from './Task'

class Tasks extends React.Component {
  // get filterByTag() {
  //   const { tasks, currentTag, tags } = this.context
  //   let tagName = ''

  //   if (currentTag === 0) {
  //     return tasks
  //   } else {
  //     tags.forEach(tag => {
  //       if (tag.id === currentTag) {
  //         tagName = tag.name
  //       }
  //     })
  //   }

  //   return tasks.filter(task => task.tag === tagName)
  // }

  render() {
    const { tasks } = this.context
    return (
      <>
        {
          tasks.map(task => (
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
