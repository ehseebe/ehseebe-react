import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resume.css";

const Resume = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const getResume = async () => {
      const response = await axios.get(
        "https://ehseebe.ca/wp-json/wp/v2/resume"
      );
      setResume(response.data);
    };
    getResume();
  }, []);

  const renderedResume = resume.map((cv) => {
    return (
      <main>
      <article className="resume-img" key={cv.id} alt={cv.title.rendered}>
        <img src={cv.acf.resume.url} alt={cv.title.rendered}/>
      </article>
      </main>
    );
  });

  return <section className="resume fade-in">{renderedResume}</section>;
};

export default Resume;
