import "./portfolio.css";
import ProjectsCategories from "./projectsCategories";
import Projects from "./projects";
import React from "react";
import data from "./data";

const Portfolio = () => {
  const [projects, setProjects] = React.useState(data);
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const filterProjectsByCategoy = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    } else {
      const newProjects = data.filter((item) => item.category === category);
      setProjects(newProjects);
    }
  };
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on. Use
        the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={categories}
          filterprojects={filterProjectsByCategoy}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
