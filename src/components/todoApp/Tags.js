import React from 'react'
import Tag from './Tag'
import { TodoAppContext } from '../../context/TodoAppContext'

class Tags extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {todoAppContext => (
          <div>
            <Tag
              key={0}
              tag={{ id: 0, name: 'All tags' }}
            />

            {todoAppContext.tags.map(tag => (
              <Tag
                key={tag.id}
                tag={tag}
              />
            ))}

            <hr />
          </div>
        )}
      </TodoAppContext.Consumer>
    )
  }
}

export default Tags
