import React from 'react'
import Tag from './Tag'

function Tags(props) {
  return (
    <>
      <Tag
        key={0}
        tag={{ id: 0, name: 'All tags' }}
        currentTag={props.currentTag}
        changeCurrentTagTags={props.changeCurrentTagIndex}
      />

      {
        props.tags.map(tag => (
          <Tag
            key={tag.id}
            tag={tag}
            currentTag={props.currentTag}
            changeCurrentTagTags={() => { props.changeCurrentTagIndex(tag) }}
          />
        ))
      }
    </>
  )
}

export default Tags
