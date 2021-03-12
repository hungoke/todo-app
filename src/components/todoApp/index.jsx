import React, { useState } from 'react'
import { tasks } from './../../constants/tasks'
import { tags } from './../../constants/tags'
import Tasks from './Tasks'
import Tags from './Tags'

const TodoApp = () => {
  const [tasksList, setTasksList] = useState(tasks)
  const [tagsList, setTagsList] = useState(tags)
  const [currentTag, setCurrentTag] = useState(0)

  const changeStatusTask = task => {
    task.completed = !task.completed
    setTasksList([...tasksList])
  }

  const changeCurrentTag = tag => {
    setCurrentTag(tag.id)
  }

  return (
    <>
      <Tags
        tagsList={tagsList}
        currentTag={currentTag}
        changeCurrentTagIndex={changeCurrentTag}
      />

      <Tasks
        tasksList={tasksList}
        currentTag={currentTag}
        changeStatusIndex={changeStatusTask}
      />
    </>
  )
}

export default TodoApp
