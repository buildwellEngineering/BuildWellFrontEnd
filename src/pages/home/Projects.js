

import React, { useEffect, useState } from 'react';
import './styles/Projects.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function Projects() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://buildwellengineering.com",
    "name": "Our Projects - BuildWell Construction",
    "description": "Explore the diverse range of residential, commercial, institutional, and industrial projects completed by BuildWell Construction."
  }
  
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = () => {
    navigate('/allProjects');
  };

  const fetchHomePageProjects = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/homePage/getData/projects`);

      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePageProjects();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet> 
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  return (
    <section id="Projects" className="scroll-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <div className="container">
        <div className="row d-flex justify-content-start justify-content-lg-center py-2 py-md-5 px-3">
          <h1 className="projects-title text-md-center text-start">PROJECTS</h1>
          <div className="projectsLine mb-xl-2"></div>
        </div>
        <div className="row px-md-5 px-3">
          {projects.map((e, index) => (
            <div className="col-12 col-lg-6" key={index}>
              <div className="image-container rounded-3">
                <Link to='/allProjects'>
                  <img src={e.projectMediaUrl} className="img-fluid grayscale" alt="Project" loading='lazy' />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-end px-5 py-2">
            <button type="button" id="MoreProjectsBtn" onClick={handleChange}>
              More Projects ...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
