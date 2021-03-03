import React from 'react'
import { TodoAppContext } from '../../../context/TodoAppContext'
import Task from './Task'

class TasksList extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          context => (
            <>
              {
                context.tasks.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                  />
                ))
              }
            </>
          )
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default TasksList
