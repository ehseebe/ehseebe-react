import React from "react";

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <article id={project.acf.type}>
      <h1>{project.title.rendered}</h1>
      <figure>
        <img src={project.acf.screenshot.sizes.large} />
      </figure>
      <p>{project.acf.description}</p>
      <p>{project.acf.stack}</p>
    </article>
  );
};

export default ProjectDetail;
