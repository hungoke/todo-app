import React from 'react'
import { TodoAppContext } from '../../../context/TodoAppContext'

class TasksList extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          todoAppContext => {
            return (
              <>
                {
                  todoAppContext.map(task => (
                    <p>{task.name}</p>
                  ))
                }
              </>
            )
          }
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default TasksList
