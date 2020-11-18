import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resume.css";

const Resume = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const getResume = async () => {
      const response = await axios.get(
        "http://localhost:10013/wp-json/wp/v2/resume"
      );
      setResume(response.data);
    };
    getResume();
  }, []);

  const renderedResume = resume.map((cv) => {
    console.log(cv);
    return (
      <figure className="resume-img" key={cv.id}>
        <img src={cv.acf.resume.url} />
      </figure>
    );
  });

  return <section className="resume fade-in">{renderedResume}</section>;
};

export default Resume;
