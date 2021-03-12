import React from 'react'
import Tag from './Tag'

const Tags = props => {
  const { tagsList, currentTag } = props
  return (
    <>
      <Tag
        key={0}
        tag={{ id: 0, name: 'All tags' }}
        currentTag={props.currentTag}
        changeCurrentTagTags={props.changeCurrentTagIndex}
      />

      {
        props.tagsList.map(tag => (
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
