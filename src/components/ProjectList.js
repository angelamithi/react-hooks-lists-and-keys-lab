import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectContainer=projects.map((project)=>(
  <ProjectItem 
  key={project.index}
  name={project.name}
  about={project.about}
  technologies={project.technologies}

  />
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectContainer}</div>
       </div>
  );
  
}

export default ProjectList;
