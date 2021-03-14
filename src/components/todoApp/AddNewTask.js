import React from 'react'
import uuid from 'react-uuid'
import { TodoAppContext } from './../../context/TodoAppContext'

class AddNewTask extends React.Component {
  state = {
    name: ''
  }

  onChangeName = event => {
    const { value } = event.target

    this.setState({
      name: value
    })
  }

  addNewTask = event => {
    event.preventDefault()
    const { name } = this.state
    const { currentTag, tags } = this.context

    if (name === '' && currentTag === 0) {
      alert('Please choose a tag and enter a task')
      return
    }

    if (name === '') {
      alert('Please enter a task')
      return
    }

    if (currentTag === 0) {
      alert('Please choose a tag')
      return
    }

    let tagName = ''

    tags.forEach(tag => {
      if (tag.id === currentTag) {
        tagName = tag.name
      }
    })

    const newTask = {
      id: uuid(),
      name: this.state.name,
      tag: tagName,
      completed: false
    }

    this.context.addNewTask(newTask)

    this.setState({
      name: ''
    })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form className="form-add-new-task" onSubmit={this.addNewTask}>
          <input
            className="add-new-task__input"
            type="text"
            placeholder="What do you to do?"
            value={name}
            onChange={this.onChangeName}
          />

          <button className="button-add-new-task" onClick={this.addNewTask}>+</button>
        </form>
        <hr />
      </div>
    )
  }
}

AddNewTask.contextType = TodoAppContext

export default AddNewTask
