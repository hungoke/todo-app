import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'
import Header from '../header/Header'
import { tasks } from './../../constants/tasks'
import Tags from './Tags/Tags'
import TasksList from './Tasks/TasksList'

class TodoApp extends React.Component {
  state = {
    contextValue: {
      tasks,
      tags: [
        { id: 1, name: 'home' },
        { id: 2, name: 'work' },
        { id: 3, name: 'school' }
      ],
      currentTag: 0,
      status: [
        { id: 1, completed: true, name: 'completed' },
        { id: 2, completed: false, name: 'active' }
      ],
      currentStatus: 0
    }
  }

  changeCurrentTag = newCurrentTag => {
    this.setState({
      contextValue: {
        ...this.state.contextValue,
        currentTag: newCurrentTag
      }
    })
  }

  render() {
    const { contextValue } = this.state

    return (
      <>
        <Header />

        <TodoAppContext.Provider value={{ ...contextValue, changeCurrentTag: this.changeCurrentTag }}>
          <Tags />
          <TasksList />
        </TodoAppContext.Provider>
      </>
    )
  }
}

export default TodoApp
