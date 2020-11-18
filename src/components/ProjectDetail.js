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
      <figure className="project-detail__screenshot fade-in">
        <img
          src={project.acf.screenshot.sizes.large}
          alt={project.acf.description}
        />
      </figure>
      <div className="project-detail__content">
        <header className="project-detail__content-header">
          <h1>{project.title.rendered}</h1>
          <form
            method="GET"
            action={project.acf.link}
            className="project-detail__link"
          >
            <button className="ui grey basic button" type="submit">
              Check it out
            </button>
          </form>
        </header>
        <p className="project-detail__description">{project.acf.description}</p>
        <h4>Tools</h4>
        <p className="project-detail__description">{project.acf.stack}</p>
      </div>
    </article>
  );
};

export default ProjectDetail;
