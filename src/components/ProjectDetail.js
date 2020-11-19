import React from "react";
import "./Projects.css";

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="project-detail">
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
            <button className="ui grey basic button" type="submit" data-message="click to see the project code, or live site">
              Check it out
            </button>
          </form>
        </header>
        <p className="project-detail__description">{project.acf.description}</p>
        <h2>Tools</h2>
        <p className="project-detail__description">{project.acf.stack}</p>
      </div>
    </article>
  );
};

export default ProjectDetail;
