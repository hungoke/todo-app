import React from 'react'

function Task(props) {

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

        <button onClick={() => { props.deleteTask(props.task) }}>X</button>
      </div>
    </>
  )
}

export default Task
