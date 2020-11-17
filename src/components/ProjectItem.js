import React from "react";
import './Projects.css';

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <a href="#project-detail">
      <article
        className="project-item fade-in"
        key={project.id}
        onClick={() => onProjectSelect(project)}
      >
        <figure className="project-item__thumbnail">
          <img className="ui-image" src={project.acf.screenshot.sizes.medium} />
        </figure>
      </article>
    </a>
  );
};

export default ProjectItem;
