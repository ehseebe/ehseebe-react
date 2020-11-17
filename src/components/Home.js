import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await axios.get(
        "http://localhost:10013/wp-json/wp/v2/photography"
      );
      setPhotos(response.data);
    };
    getPhotos();
  }, []);

  console.log(photos);

  const renderedPhotos = photos.map((photo) => {
    return (
      <figure className="photo-container" key={photo.id}>
        <img src={photo.acf.photo} alt={photo.title.rendered} />
      </figure>
    );
  });
  return <section className="homepage-photos">{renderedPhotos}</section>;
};

export default Home;
