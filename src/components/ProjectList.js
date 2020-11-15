import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectDetail from "./ProjectDetail";
import ProjectItem from "./ProjectItem";
import './Projects.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get(
        "http://localhost:10013/wp-json/wp/v2/project"
      );
      setProjects(response.data);
    };
    getProjects(setSelectedProject(projects[projects.length - 1])); //sets selected to vagary
  }, []);

  // console.log("?", selectedProject)
  // console.log("projects", projects)
  // console.log("projects in projectlist", projects)

  const renderedList = projects.map((project) => {
    return (
      <ProjectItem
        project={project}
        onProjectSelect={setSelectedProject}
        key={project.id}
      />
    );
  });
  return (
    <section className="projects">
    <ProjectDetail project={selectedProject} />
    <aside className="project-list">
      {renderedList}
    </aside>
    </section>
  );
};

export default ProjectList;
