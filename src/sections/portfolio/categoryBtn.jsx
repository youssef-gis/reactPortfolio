import React from 'react'

const categoryBtn = ({category, className, onchangeActiveCategory}) => {
  return (
    <button className={className} onClick={()=>onchangeActiveCategory(category)}>{category}</button>
  )
}

export default categoryBtn