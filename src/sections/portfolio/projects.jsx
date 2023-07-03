import React from 'react'
import Project from  "./project.jsx"
const projects = ({projects}) => {
  return (
    <div className='portfolio__projects' data-aos='fade-in'>{projects.map(project=><Project key={project.id} project={project} />)}</div>
  )
}

export default projects