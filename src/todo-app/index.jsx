import React, { Component } from 'react'
import { tasks } from '../..'

class TodoApp extends Component {
  state = {
    tasks,
  }

  render() {
    return (
      <div>
        <h2>React To do app</h2>
      </div>
    )
  }
}

export default TodoApp
