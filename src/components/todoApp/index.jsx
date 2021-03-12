import React, { useState } from "react"
import { tasks } from "./../../constants/tasks"
import { tags } from "./../../constants/tags"
import Tasks from "./Tasks"
import Tags from "./Tags"

function TodoApp() {
  const [tasksList, setTasksList] = useState(tasks)
  const [currentTag, setCurrentTag] = useState(0)
  const status = [
    { id: 1, name: 'Active', completed: false },
    { id: 2, name: 'Completed', completed: true },
  ]

  const changeStatusTask = (task) => {
    task.completed = !task.completed
    setTasksList([...tasksList])
  }

  const changeCurrentTag = (tag) => {
    setCurrentTag(tag.id)
  }

  const deleteTask = (taskDelete) => {
    const indexOfTask = tasksList.findIndex(task => task.id === taskDelete.id)
    tasksList.splice(indexOfTask, 1)
    setTasksList([...tasksList])
  }

  return (
    <>
      <Tags
        tags={tags}
        currentTag={currentTag}
        changeCurrentTagIndex={changeCurrentTag}
      />

      <Tasks
        tasksList={tasksList}
        currentTag={currentTag}
        changeStatusIndex={changeStatusTask}
        deleteTaskIndex={deleteTask}
      />
    </>
  )
}

export default TodoApp
