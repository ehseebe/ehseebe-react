import React from "react";

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <>
      <article
        className="project-item item"
        key={project.id}
        onClick={() => onProjectSelect(project)}
      >
        <figure className="content">
          <h2 className="header">{project.title.rendered}</h2>
          <img className="ui-image" src={project.acf.screenshot.sizes.medium} />
        </figure>
      </article>
    </>
  );
};

export default ProjectItem;
