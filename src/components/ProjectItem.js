import React from "react";
import ProjectList from "./ProjectList";
let i=0;
function ProjectItem({ name, about, technologies }) {
  const technologyContainer=technologies.map((technology,index)=>(
    <span key={index}>{technology}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyContainer}
      </div>
    </div>
  );
}

export default ProjectItem;
