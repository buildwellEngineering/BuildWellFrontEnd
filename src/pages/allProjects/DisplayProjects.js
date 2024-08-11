



import React, { useEffect, useState } from 'react';
import './styles/DisplayProjects.css';
import axios from 'axios';

export default function DisplayProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const response = await axios.get('https://buildwell-engineering.vercel.app/projects/getprojects');
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false); // Stop loading in case of error
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  return (
    <div className='DisplayProjects' id="DisplayProjects">
      <div className='container py-5'>
        <div className='row title'>
          <h2>Our Projects</h2>
          <h1>We Build Projects That Last</h1>
          <hr className='mt-2' />
        </div>
        <div className='row py-5'>
          {projects.map((project, index) => (
            <div className="col-12 col-lg-4" key={index} style={{height:'500px'}}>
              <div className="image-container" onClick={() => handleImageClick(index)}>
                <img src={project.projectMediaUrl} className="img-fluid" alt={project.projectTitle} />
                <div className="image-content mt-1 mb-2">{project.projectTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="carousel">
          <div className="carousel-content">
            <span className="close" onClick={handleClose} style={{color:'white',fontSize:'3rem'}}>&times;</span>
            <div className="carousel-left">
              <img src={projects[selectedIndex].projectMediaUrl} alt={projects[selectedIndex].projectTitle} className="carousel-img" />
            </div>
            <div className="carousel-right" style={{overflowY:'auto'}}>
              <h2 className='sticky-top bg-white'>{projects[selectedIndex].projectTitle}</h2>
              <br />
              <p>{projects[selectedIndex].projectDescription}</p>
            </div>
          </div>
          <span className="carousel-btn left" onClick={handlePrev}>&lt;</span>
          <span className="carousel-btn right" onClick={handleNext}>&gt;</span>
        </div>
      )}
    </div>
  );
}
