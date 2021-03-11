import React, { useState } from 'react'
import { tasks } from './../../constants/tasks'

const TodoApp = () => {
  const [tasksList, setTasks] = useState(tasks)
  console.log(tasksList)
  return (
    <>
      <h1>To do app</h1>
    </>
  )
}

export default TodoApp
