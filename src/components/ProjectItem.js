import React from "react";
import './Projects.css';

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <>
      <article
        className="project-item"
        key={project.id}
        onClick={() => onProjectSelect(project)}
      >
        <figure className="project-item__thumbnail">
          {/* <h2 className="header">{project.title.rendered}</h2> */}
          <img className="ui-image" src={project.acf.screenshot.sizes.medium} />
        </figure>
      </article>
    </>
  );
};

export default ProjectItem;
