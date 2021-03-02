import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'
import { tasks } from './../../constants/tasks'
import TasksList from './Tasks/TasksList'

class TodoApp extends React.Component {
  state = {
    tasks,
  }

  render() {
    const { tasks } = this.state
    return (
      <>
        <TodoAppContext.Provider value={tasks}>
          <TasksList />
        </TodoAppContext.Provider>
      </>
    )
  }
}

export default TodoApp
