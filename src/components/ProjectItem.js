import React from "react";
import "./Projects.css";

const ProjectItem = ({ project, onProjectSelect }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 40, behavior: "smooth" });
  };

  const onClickHandler = () => {
    onProjectSelect(project);
    scrollTop();
  };
  
  return (
    <article
      className="project-item fade-in"
      key={project.id}
      onClick={onClickHandler}
    >
      <figure className="project-item__thumbnail" alt={project.title.rendered}>
        <img className="ui-image" src={project.acf.screenshot.sizes.medium} alt={project.title.rendered}/>
      </figure>
    </article>
  );
};

export default ProjectItem;
