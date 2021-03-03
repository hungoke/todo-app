import React from 'react'
import './../../../App.css'

class Task extends React.Component {
  render() {
    const { task } = this.props
    return (
      <>
        <div>
          <label className={task.completed === true ? 'line-throught' : ''}>
            <input
              type="checkbox"
              checked={task.completed === true}
            />
            {this.props.task.name}
          </label>
          <button>X</button>
        </div>
      </>
    )
  }
}

export default Task
