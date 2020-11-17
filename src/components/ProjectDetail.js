import React from "react";
import "./Projects.css";

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="ui segment project-detail">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }

  return (
    <article className="project-detail" id="project-detail">
      <figure className="project-detail__screenshot">
        <img src={project.acf.screenshot.sizes.large} alt={project.acf.description}/>
      </figure>
      <div className="project-detail__content">
        <h1 className="project-detail__content-header">
          {project.title.rendered}
        </h1>
        <p className="project-detail__description">{project.acf.description}</p>
        <h4 className="project-detail__content-header">Tools</h4>
        <p className="project-detail__description">{project.acf.stack}</p>
      </div>
    </article>
  );
};

export default ProjectDetail;
