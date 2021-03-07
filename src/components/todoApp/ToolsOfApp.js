import React from 'react'
import TasksListContext from '../../context/TasksListContext'
import { TodoAppContext } from '../../context/TodoAppContext'
import Status from './Status'

class ToolsOfApp extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          todoAppContext => (
            <div>
              <Status
                key={0}
                status={{ id: 0, name: 'All tasks' }}
              />

              {
                todoAppContext.status.map(status => (
                  <Status
                    key={status.id}
                    status={status}
                  />
                ))
              }
              <TasksListContext.Consumer>
                {
                  tasksListContext => (
                    <button onClick={() => { todoAppContext.clearCompleted(tasksListContext) }}>
                      Clear completed
                    </button>
                  )
                }
              </TasksListContext.Consumer>
            </div>
          )
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default ToolsOfApp
