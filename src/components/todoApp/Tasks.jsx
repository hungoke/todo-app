import React from 'react'
import Task from './Task'

const Tasks = props => {
  const { tasksList, currentTag } = props
  const filteredTaskByTag = () => {
    if (currentTag === 0) {
      return tasksList
    } else {
      return tasksList.filter(task => task.tag === currentTag)
    }
  }

  return (
    <>
      {
        filteredTaskByTag().map(task => (
          <Task
            key={task.id}
            task={task}
            changeStatusTasks={() => { props.changeStatusIndex(task) }}
          />
        ))
      }
    </>
  )
}

export default Tasks
