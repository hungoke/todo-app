import React from 'react'
import { TodoAppContext } from '../../context/TodoAppContext'

class Tag extends React.Component {
  render() {
    const { tag } = this.props

    return (
      <TodoAppContext.Consumer>
        {todoAppContext => (
          <span>
            <label>
              <input
                type="radio"
                name="tag"
                checked={tag.id === todoAppContext.currentTag}
                onChange={() => { todoAppContext.changeCurrentTag(tag.id) }}
              />
              {tag.name}
            </label>
          </span>
        )}
      </TodoAppContext.Consumer>
    )
  }
}

export default Tag
