import React from 'react'

const Task = props => {

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={props.task.completed}
            onChange={() => { props.changeStatusTasks(props.task) }}
          />
          {props.task.name}
        </label>

        <button>X</button>
      </div>
    </>
  )
}

export default Task
