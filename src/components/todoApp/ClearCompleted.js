import React from 'react'
import TasksListContext from '../../context/TasksListContext'

class ClearCompleted extends React.Component {
  render() {
    return (
      <TasksListContext.Consumer>
        {
          taskListContext => (
            <>
              <button>Clear completed</button>
            </>
          )
        }
      </TasksListContext.Consumer>
    )
  }
}

export default ClearCompleted
