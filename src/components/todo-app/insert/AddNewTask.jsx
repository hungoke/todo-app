import React, { Component } from 'react'
import nextId from 'react-id-generator'

class AddNewTask extends Component {
  state = {
    name: '',
    errorMessage: ''
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  addNewTask = (event) => {
    event.preventDefault()
    const { name } = this.state
    const { currentTag } = this.props

    if (name === '' && currentTag === 0) {
      alert('This field is required and Please choose a tag')
      return
    } else {
      if (name === '') {
        alert('This field is required')
        return
      }

      if (currentTag === 0) {
        alert('Please choose a tag')
        return
      }
    }

    const newTask = {
      id: nextId(),
      name: name,
      tag: currentTag,
      completed: false
    }

    this.props.addNewTask(newTask)

    this.setState({
      name: '',
      errorMessage: ''
    })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form onSubmit={this.addNewTask}>
          <input
            type="text"
            placeholder="What do you need to do?"
            value={name}
            onChange={this.onChange}
          />

          <button onClick={this.addNewTask}>+</button>

          <hr />
        </form>
      </div>
    )
  }
}

export default AddNewTask
