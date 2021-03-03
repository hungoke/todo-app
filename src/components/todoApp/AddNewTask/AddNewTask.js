import React from 'react'
import { TodoAppContext } from './../../../context/TodoAppContext'

class AddNewTask extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          context => (

          )
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default AddNewTask
