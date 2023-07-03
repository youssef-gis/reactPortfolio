import React from 'react'
import CategoryBtn from './categoryBtn'

const ProjectsCategories  = ({categories, filterprojects}) => {

  const [activeCategory, setActiveCategory] = React.useState("all");
  const handleActiveCategory = (activecat)=>{
    setActiveCategory(activecat)
    filterprojects(activecat)

  }
  return (
    <div className='projects__categories' >
      {categories.map(category=><CategoryBtn key={category} 
                              category={category} 
                              className={`btn category_btn ${activeCategory === category ? "primary" : "white"}`}
                              onchangeActiveCategory = {()=>handleActiveCategory(category)} />)}
    </div>
  )
}
export default ProjectsCategories