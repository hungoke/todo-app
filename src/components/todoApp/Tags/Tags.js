import React from 'react'
import { TodoAppContext } from '../../../context/TodoAppContext'

class Tags extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          todoAppContext => (
            <>
              <span>
                <label>
                  <input
                    type="radio"
                    name="tag"
                    checked={todoAppContext.currentTag === 0}
                    onChange={() => todoAppContext.changeCurrentTag(0)}
                  />
                  All tag
                </label>
              </span>

              {
                todoAppContext.tags.map(tag => (
                  <span>
                    <label>
                      <input
                        type="radio"
                        name="tag"
                        checked={tag.id === todoAppContext.currentTag}
                        onChange={() => todoAppContext.changeCurrentTag(tag.id)}
                      />
                      {tag.name}
                    </label>
                  </span>
                ))
              }
            </>
          )
        }
      </TodoAppContext.Consumer>
    )
  }
}

export default Tags
