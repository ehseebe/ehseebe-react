import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get("http://localhost:10013/wp-json/wp/v2/project")
      setProjects(response.data)
    }
    getProjects()

  }, [])

  // console.log("projects", projects)
  console.log("projects in projectlist", projects)
  return(
    <> ProjectList </>
  )
}

export default ProjectList;