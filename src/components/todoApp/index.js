import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'
import { tasks } from './../../constants/tasks'
import AddNewTask from './AddNewTask'
import Tags from './Tags'
import Tasks from './Tasks'

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

  completedTask = task => {
    const completedTask = tasks.find(element => element.id === task.id)
    completedTask.completed = !completedTask.completed

    this.setState({
      contextValue: {
        ...this.state.contextValue,
        tasks: [...tasks]
      }
    })
  }

  deleteTask = deleteTask => {
    const indexOfTask = tasks.findIndex(task => task.id === deleteTask.id)
    tasks.splice(indexOfTask, 1)

    this.setState({
      contextValue: {
        ...this.state.contextValue,
        tasks: [...tasks]
      }
    })
  }

  addNewTask = newTask => {
    tasks.unshift(newTask)

    this.setState({
      contextValue: {
        ...this.state.contextValue,
        tasks: [...tasks]
      }
    })
  }

  render() {
    const { contextValue } = this.state

    return (
      <>
        <TodoAppContext.Provider
          value={
            {
              ...contextValue,
              changeCurrentTag: this.changeCurrentTag,
              completedTask: this.completedTask,
              deleteTask: this.deleteTask,
              addNewTask: this.addNewTask
            }
          }
        >

          <AddNewTask />
          <Tags />
          <Tasks />
        </TodoAppContext.Provider>
      </>
    )
  }
}

export default TodoApp
