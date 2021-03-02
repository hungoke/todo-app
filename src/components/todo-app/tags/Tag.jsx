import React, { Component } from 'react'

class Tag extends Component {
  changeCurrentTag = () => {
    const { tag } = this.props
    this.props.changeCurrentTag(tag)
  }

  render() {
    const { tag, currentTag } = this.props

    return (
      <span>
        <label>
          <input
            type="radio"
            name="tag"
            checked={currentTag === tag.id}
            onChange={this.changeCurrentTag}
          />
          {tag.name}
        </label>
      </span>
    )
  }
}

export default Tag
