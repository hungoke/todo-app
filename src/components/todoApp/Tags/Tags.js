import React from 'react'
import { TodoAppContext } from './../../../context/TodoAppContext'
import Tag from './Tag'

class Tags extends React.Component {
  render() {
    return (
      <TodoAppContext.Consumer>
        {
          todoAppContext => (
            <>
              {
                <Tag
                  key={0}
                  tag={{ id: 0, name: 'All tags' }}
                />
              }
              {
                todoAppContext.tags.map(tag => (
                  <Tag
                    key={tag.id}
                    tag={tag}
                  />
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
