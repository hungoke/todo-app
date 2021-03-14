import React from 'react'
import Tag from './Tag'
import { TodoAppContext } from '../../context/TodoAppContext'

class Tags extends React.Component {
  render() {
    return (
      <div>
        <div className="tags">
          <TodoAppContext.Consumer>
            {
              todoAppContext => (
                <div>
                  <label>Tags</label>
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
                </div>
              )
            }
          </TodoAppContext.Consumer>
        </div>

        <hr />
      </div>
    )
  }
}

export default Tags
