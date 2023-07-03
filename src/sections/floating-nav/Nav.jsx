import React from 'react'


const Nav = ({className ,item}) => {
  return (
    <li key={item.id}      className={className}>
        <a href={item.link}
    
        style={{color:'black'}}>
            {item.icon}
        </a>
    </li>
  )
}

export default Nav