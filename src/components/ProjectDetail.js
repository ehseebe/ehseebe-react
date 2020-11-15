import React from "react";
import './Projects.css';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <article className="project-detail" id="project-detail">
      <h1>{project.title.rendered}</h1>
      <figure className="project-detail__screenshot">
        <img src={project.acf.screenshot.sizes.large} />
      </figure>
      <p className="project-detail__description">{project.acf.description}</p>
      <p className="project-detail__stack">{project.acf.stack}</p>
    </article>
  );
};

export default ProjectDetail;
