import React from 'react'

const Tag = props => {
  return (
    <>
      <span>
        <label>
          <input
            type="radio"
            name="tag"
            checked={props.currentTag === props.tag.id}
            onChange={() => { props.changeCurrentTagTags(props.tag) }}
          />
          {props.tag.name}
        </label>
      </span>
    </>
  )
}

export default Tag
