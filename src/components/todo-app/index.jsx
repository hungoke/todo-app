import React, { Component } from 'react'
import { tasks } from '../../constants/tasks'
import AddNewTask from './insert/AddNewTask'
import TagsList from './tags/TagsList'
import TasksList from './tasks/TasksList'

class TodoApp extends Component {
  state = {
    tasks,
    tags: [
      { id: 1, name: 'Home' },
      { id: 2, name: 'Work' },
      { id: 3, name: 'School' }
    ],
    currentTag: 0,
    status: [
      { id: 1, name: 'Active', completed: false },
      { id: 2, name: 'Completed', completed: true }
    ],
    currentStatus: 0
  }

  changeCurrentTag = tag => {
    this.setState({
      currentTag: tag.id
    })
  }

  addNewTask = newTask => {
    tasks.unshift(newTask)

    this.setState({
      tasks: [...tasks]
    })
  }

  deleteTask = task => {
    tasks.splice(tasks.indexOf(task), 1)

    this.setState({
      tasks: [...tasks]
    })
  }

  completeTask = task => {
    tasks[tasks.indexOf(task)].completed = !task.completed

    this.setState({
      tasks: [...tasks]
    })
  }

  changeStatus = newStatus => {
    this.setState({
      currentStatus: newStatus.id
    })
  }

  clearCompleted = arrayTask => {
    arrayTask.forEach(task => {
      task.completed = false
    })

    this.setState({
      tasks: [...tasks]
    })
  }

  render() {
    const { tags, currentTag, status, currentStatus } = this.state
    return (
      <div>
        <AddNewTask
          currentTag={currentTag}
          addNewTask={this.addNewTask}
        />

        <TagsList
          tags={tags}
          currentTag={currentTag}
          changeCurrentTag={this.changeCurrentTag}
        />

        <TasksList
          tasks={tasks}
          currentTag={currentTag}
          currentStatus={currentStatus}
          status={status}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          changeStatus={this.changeStatus}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default TodoApp
