import React, { Component } from 'react'
import Tag from './Tag'

class Tags extends Component {
  changeCurrentTag = tag => {
    this.props.changeCurrentTag(tag)
  }

  render() {
    const { tags, currentTag } = this.props

    return (
      <div>
        <Tag
          key={0}
          tag={{ id: 0, name: 'All' }}
          currentTag={currentTag}
          changeCurrentTag={this.changeCurrentTag}
        />

        {
          tags.map((tag) => (
            <Tag
              key={tag.id}
              tag={tag}
              currentTag={currentTag}
              changeCurrentTag={this.changeCurrentTag}
            />
          ))
        }

        <hr />
      </div>
    )
  }
}

export default Tags
