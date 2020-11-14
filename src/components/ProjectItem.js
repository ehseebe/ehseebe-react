import React from "react";

const ProjectItem = ({ project, onProjectSelect }) => {
  return (
    <>
      <article
        className="project-item"
        key={project.id}
        onClick={() => onProjectSelect(project)}
      >
        <h2>{project.title.rendered}</h2>
        <figure>
          <img src={project.acf.screenshot.sizes.medium} />
        </figure>
      </article>
    </>
  );
};

export default ProjectItem;
