import React, { Component } from 'react'
import { tasks } from '../../constants/tasks'
import AddNewTask from './AddNewTask'
import Status from './StatusList'
import TagsList from './TagsList'
import TasksList from './TasksList'

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
        />

        <Status
          status={status}
          currentStatus={currentStatus}
          changeStatus={this.changeStatus}
        />
      </div>
    )
  }
}

export default TodoApp
