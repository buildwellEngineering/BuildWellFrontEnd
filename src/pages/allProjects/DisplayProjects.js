// import React from 'react';
// import './styles/DisplayProjects.css'
// import img1 from '../../assests/Images/Projects/DSC_0085.jpg';
// import img2 from '../../assests/Images/Projects/DSC_0962.jpg';
// import img3 from '../../assests/Images/Projects/DSC_0104.jpg';
// import img4 from '../../assests/Images/Projects/DSC_0271.jpg';
// import logo from '../../assests/Images/logo3.png';

// export default function DisplayProjects() {
//   return (
//     <div className='DisplayProjects' id="DisplayProjects" >
//         <div className='container py-5'>
//             <div className='row title'>
//                 {/* <div className='logo'>
//                     <img src={logo} className='img-fluid' alt="logo" />
//                 </div> */}
//                 <h2 > 
//                     Our Projects
//                 </h2>
//                 <h1 >
//                     We Build Projects That Last
//                 </h1>
//                 <hr className='mt-2' />
//             </div>
//             <div className='row py-5'>
//                 {[img1, img2, img3, img4].map((img, index) => (
//                     <div className="col-12 col-lg-4" key={index}>
//                     <div className="image-container">
//                         <img src={img} className="img-fluid" alt="Projects" />
//                         <div className="image-content mt-1 mb-2">Image Content: {index+1}</div>
//                     </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     </div>
//   )
// }









// import React, { useState } from 'react';
// import './styles/DisplayProjects.css';
// import img1 from '../../assests/Images/Projects/DSC_0085.jpg';
// import img2 from '../../assests/Images/Projects/DSC_0962.jpg';
// import img3 from '../../assests/Images/Projects/DSC_0104.jpg';
// import img4 from '../../assests/Images/Projects/DSC_0271.jpg';

// const projects = [
//   { img: img1, title: 'Angela Residence', description: 'Description of Angela Residence' },
//   { img: img2, title: 'Sam Valley Highway', description: 'Description of Sam Valley Highway' },
//   { img: img3, title: 'Irving Industrial Region', description: 'Description of Irving Industrial Region' },
//   { img: img4, title: 'Downtown Apartment Complex', description: 'Description of Downtown Apartment Complex' },
// ];

// export default function DisplayProjects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleImageClick = (project) => {
//     setSelectedProject(project);
//   };

//   const handleClose = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className='DisplayProjects' id="DisplayProjects">
//       <div className='container py-5'>
//         <div className='row title'>
//           <h2>Our Projects</h2>
//           <h1>We Build Projects That Last</h1>
//           <hr className='mt-2' />
//         </div>
//         <div className='row py-5'>
//           {projects.map((project, index) => (
//             <div className="col-12 col-lg-4" key={index}>
//               <div className="image-container" onClick={() => handleImageClick(project)}>
//                 <img src={project.img} className="img-fluid" alt={project.title} />
//                 <div className="image-content mt-1 mb-2">{project.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProject && (
//         <div className="lightbox">
//           <div className="lightbox-content">
//             <span className="close" onClick={handleClose}>&times;</span>
//             <div className="lightbox-left">
//               <img src={selectedProject.img} alt={selectedProject.title} className="lightbox-img" />
//             </div>
//             <div className="lightbox-right">
//               <h2>{selectedProject.title}</h2>
//               <p>{selectedProject.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import './styles/DisplayProjects.css';
// import img1 from '../../assests/Images/Projects/DSC_0085.jpg';
// import img2 from '../../assests/Images/Projects/DSC_0962.jpg';
// import img3 from '../../assests/Images/Projects/DSC_0104.jpg';
// import img4 from '../../assests/Images/Projects/DSC_0271.jpg';

// const projects = [
//   { img: img1, title: 'Angela Residence', description: 'Description of Angela Residence' },
//   { img: img2, title: 'Sam Valley Highway', description: 'Description of Sam Valley Highway' },
//   { img: img3, title: 'Irving Industrial Region', description: 'Description of Irving Industrial Region' },
//   { img: img4, title: 'Downtown Apartment Complex', description: 'Description of Downtown Apartment Complex' },
// ];

// export default function DisplayProjects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleImageClick = (project) => {
//     setSelectedProject(project);
//   };

//   const handleClose = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className='DisplayProjects' id="DisplayProjects">
//       <div className='container py-5'>
//         <div className='row title'>
//           <h2>Our Projects</h2>
//           <h1>We Build Projects That Last</h1>
//           <hr className='mt-2' />
//         </div>
//         <div className='row py-5'>
//           {projects.map((project, index) => (
//             <div className="col-12 col-lg-4" key={index}>
//               <div className="image-container" onClick={() => handleImageClick(project)}>
//                 <img src={project.img} className="img-fluid" alt={project.title} />
//                 <div className="image-content mt-1 mb-2">{project.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedProject && (
//         <div className="lightbox">
//           <div className="lightbox-content">
//             <span className="close" onClick={handleClose}>&times;</span>
//             <div className="lightbox-left">
//               <img src={selectedProject.img} alt={selectedProject.title} className="lightbox-img" />
//             </div>
//             <div className="lightbox-right">
//               <h2>{selectedProject.title}</h2>
//               <p>{selectedProject.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





//og code ------------------------------------------------

// import React, { useState } from 'react';
// import './styles/DisplayProjects.css';
// import img1 from '../../assests/Images/ProjectsNew/DSC_0085.jpg';
// import img2 from '../../assests/Images/ProjectsNew/DSC_0962.jpg';
// import img3 from '../../assests/Images/ProjectsNew/DSC_0104.jpg';
// import img4 from '../../assests/Images/ProjectsNew/DSC_0271.jpg';

// const projects = [
//   { img: img1, title: 'Angela Residence', description: 'Description of Angela Residence' },
//   { img: img2, title: 'Sam Valley Highway', description: 'Description of Sam Valley Highway' },
//   { img: img3, title: 'Irving Industrial Region', description: 'Description of Irving Industrial Region' },
//   { img: img4, title: 'Downtown Apartment Complex', description: 'Description of Downtown Apartment Complex' },
// ];

// export default function DisplayProjects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleImageClick = (project) => {
//     setSelectedProject(project);
//   };

//   const handleClose = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className='DisplayProjects' id="DisplayProjects">
//       <div className='container py-5'>
//         <div className='row title'>
//           <h2>Our Projects</h2>
//           <h1>We Build Projects That Last</h1>
//           <hr className='mt-2' />
//         </div>
//         <div className='row py-5'>
//           {projects.map((project, index) => (
//             <div className="col-12 col-lg-4" key={index}>
//               <div className="image-container" onClick={() => handleImageClick(project)}>
//                 <img src={project.img} className="img-fluid" alt={project.title} />
//                 <div className="image-content mt-1 mb-2">{project.title}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      

//       {selectedProject && (
//         <div className="lightbox">
//           <div className="lightbox-content">
//             <span className="close" onClick={handleClose} style={{color:'white',fontSize:'3rem'}}>&times;</span>
//             <div className="lightbox-left">
//               <img src={selectedProject.img} alt={selectedProject.title} className="lightbox-img" />
//             </div>
//             <div className="lightbox-right" style={{overflowY:'auto'}}>
//               <h2>{selectedProject.title}</h2>
//               <p>{selectedProject.description} 
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import './styles/DisplayProjects.css';
// import img1 from '../../assests/Images/ProjectsNew/DSC_0085.jpg';
// import img2 from '../../assests/Images/ProjectsNew/DSC_0962.jpg';
// import img3 from '../../assests/Images/ProjectsNew/DSC_0104.jpg';
// import img4 from '../../assests/Images/ProjectsNew/DSC_0271.jpg';
import axios from 'axios';

// const projects = [
//   { img: img1, title: 'Angela Residence', description: 'Description of Angela Residence' },
//   { img: img2, title: 'Sam Valley Highway', description: 'Description of Sam Valley Highway' },
//   { img: img3, title: 'Irving Industrial Region', description: 'Description of Irving Industrial Region' },
//   { img: img4, title: 'Downtown Apartment Complex', description: 'Description of Downtown Apartment Complex' },
// ];

export default function DisplayProjects() {
  const [projects,setProjects] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getProjects=async()=>{
    const response = await axios.get('https://buildwell-engineering.vercel.app/projects/getprojects');
    setProjects(response.data);
  }

  useEffect(()=>{
    getProjects();
  },[]);

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
            <div className="col-12 col-lg-4" key={index}>
              <div className="image-container" onClick={() => handleImageClick(index)}>
                <img src={project.projectMediaUrl} className="img-fluid" alt={project.projectTitle} />
                <div className="image-content mt-1 mb-2">{project.projectTitle}</div>
                {/* <div className="image-content mt-1 mb-2">{project.projectDescription}</div> */}
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
              <img src={projects[selectedIndex].projectMediaUrl}  alt={projects[selectedIndex].projectTitle} className="carousel-img" />
            </div>
            <div className="carousel-right" style={{overflowY:'auto'}}>
              <h2 className='sticky-top bg-white' >{projects[selectedIndex].projectTitle}</h2>
              <p>{projects[selectedIndex].projectTitle}
              </p>
            </div>
          </div>
          <span className="carousel-btn left" onClick={handlePrev}>&lt;</span>
          <span className="carousel-btn right" onClick={handleNext}>&gt;</span>
        </div>
      )}
    </div>
  );
}

