import React from 'react'
import Card from "../../components/Cards" 
const project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__img-project">
            <img src={project.image} alt={project.title} />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.github} className='btn sm primary' target='_blank' rel='noopener noreferrer'>Code</a>
            { {project.demo} && ( <a href={project.demo} className='btn sm primary' target='_blank' rel='noopener noreferrer'>Demo</a> ) }
        </div>
    </Card>
  )
}

export default project
