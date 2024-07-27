import React,{useEffect, useState} from 'react';
import './styles/Projects.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Projects() {
  const navigate = useNavigate();
  const [projects,setProjects] = useState([]);

  const handleChange = () => {
    navigate('/allProjects');
  };

  const fetchHomePageProjects =async()=>{
    try {
      
      // const response = await axios.get('http://localhost:7777/homePage/getData/projects');
      const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/projects');

      setProjects(response.data);
      //console.log(response.data)

    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchHomePageProjects();
  },[]);

  return (
    <section id="Projects" className="scroll-section">
      <div className="container">
        <div className="row d-flex justify-content-start justify-content-lg-center py-2 py-md-5 px-3">
          <h1 className="projects-title text-md-center text-start">PROJECTS</h1>
          <div className="projectsLine mb-xl-2"></div>
        </div>
        <div className="row px-md-5 px-3">
          {projects.map((e, index) => (  //[img1, img2, img3, img4].map() --ogcode
            <div className="col-12 col-lg-6 " key={index}>
              <div className="image-container rounded-3">
                <img src={e.projectMediaUrl} className="img-fluid grayscale" alt="Project" loading='lazy' />
                {/* <div className="image-content">Hovered Image Content</div> */}
              </div>
            </div>
          ))}
          
        </div>
        <div className="row"> {/* this row i am refering */}
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

