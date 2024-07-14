
//-------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Loader from '../../components/Loader';
import './styles/Projects.css'
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Projects = () => {

  // const loginStatus = useSelector((state)=>state.LoginStatus.isLoggedIn);
  // console.log(loginStatus)
  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if (!loginStatus) {
  //     navigate('/adminLogin');
  //   }
  // },[]);

  const [projects, setProjects] = useState([]);
  const [resetProjects, setResetProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(false); // useState({}) -- earlier
  const [newImage, setNewImage] = useState(false); //for if image updated 
  const [loading, setLoading] = useState(false);


  const fetchProjects = async () => {

    setLoading(true);

    try {
      //const response = await axios.get('http://localhost:7777/projects/getProjects');
      const response = await axios.get('https://buildwell-engineering.vercel.app/projects/getProjects');
      setProjects(response.data);
      setResetProjects(response.data);
      //console.log(response.data)

      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    fetchProjects();

  }, [])

  const editProject = (project) => {
    //console.log(project)
    setSelectedProject(project)
    //console.log(project)
    setNewImage(false); // Reset newImage when a new project is selected for editing
  };

  const handleClose = () => {
    setSelectedProject(null);
    setNewImage(false);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedProject({ ...selectedProject, projectMediaUrl: file });
      setNewImage(true)
    }
  };

  const handleTitleChange = (event) => {
    // const updatedProjects = projects.map((project) =>
    //   project.id === selectedProject.id ? { ...project, title: event.target.value } : project
    // );
    // setProjects(updatedProjects);
    setSelectedProject({ ...selectedProject, projectTitle: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    // const updatedProjects = projects.map((project) =>
    //   project.id === selectedProject.id ? { ...project, description: event.target.value } : project
    // );
    // setProjects(updatedProjects);
    setSelectedProject({ ...selectedProject, projectDescription: event.target.value });
  };

  const handleDisplayChange = (e) => {
    setSelectedProject({ ...selectedProject, projectDisplay: e.target.checked })
  }

  const handleReset = () => {
    setProjects(resetProjects);
    if (selectedProject) {
      const originalProject = resetProjects.find(project => project.id === selectedProject.id);
      setSelectedProject(originalProject);
      // setNewImage(null);
    }
  };


  const [newProject, setNewProject] = useState({
    projectTitle: '',
    projectDescription: '',
    projectMediaUrl: null, // Updated state to hold image file
  });

  const handleNewImageChange = (e) => {
    setNewProject({ ...newProject, projectMediaUrl: e.target.files[0] });
  };
  const handleNewTitleChange = (e) => {
    setNewProject({ ...newProject, projectTitle: e.target.value });
  };

  const handleNewDescriptionChange = (e) => {
    setNewProject({ ...newProject, projectDescription: e.target.value });
  };

  const handleNewReset = () => {
    setNewProject({
      projectTitle: '',
      projectDescription: '',
      projectMediaUrl: ''
    });
  };

  const handleNewSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newProject.projectTitle);
      formData.append('description', newProject.projectDescription);
      formData.append('mediaUrl', newProject.projectMediaUrl);
      console.log(newProject.projectMediaUrl)

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // const response = await axios.post('http://localhost:7777/projects/add', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      const response = await axios.post('https://buildwell-engineering.vercel.app/projects/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 201) {
        const data = response.data;
        console.log('New Project added:', data);
        // Update state or perform other actions upon successful submission
        // Reset form fields
        setNewProject({
          projectTitle: '',
          projectDescription: '',
          projectMediaUrl: null,
        });
      } else {
        throw new Error('Failed to submit project.');
      }
    } catch (error) {
      console.error('Error adding new project:', error.message);
      // Handle error state or display error message to user
    }
  };


  const handleDelete = async () => {
    try {
      if (!selectedProject._id) {
        console.error('No project selected for deletion.');
        return;
      }
      console.log(selectedProject._id)
      // const response = await axios.delete(`http://localhost:7777/projects/delete`, {
      //   data: { projectId: selectedProject._id }
      // });
      const response = await axios.delete(`https://buildwell-engineering.vercel.app/projects/delete`, {
        data: { projectId: selectedProject._id }
      });

      if (response.status === 200) {
        console.log('Project deleted successfully.');
        // Filter out the deleted project from state
        const updatedProjects = projects.filter(project => project._id !== selectedProject._id);
        setProjects(updatedProjects);
        setSelectedProject({});
      } else {
        throw new Error('Failed to delete project.');
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
    }
  }

  const handleUpdate = async () => {
    try {
      if (!selectedProject._id) {
        console.error('No project selected for update.');
        return;
      }

      const formData = new FormData();
      formData.append('title', selectedProject.projectTitle);
      formData.append('description', selectedProject.projectDescription);
      formData.append('mediaUrlupdate', selectedProject.projectMediaUrl);
      formData.append('_id', selectedProject._id);
      formData.append('imageUpdated', newImage ? 'true' : 'false'); //if image is updated this is set as true else false

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      //const response = await axios.put(`http://localhost:7777/projects/update`, formData);
      const response = await axios.put(`https://buildwell-engineering.vercel.app/projects/update`, formData);

      if (response.status === 200) {
        // console.log('Project updated successfully.');
        // // Update projects state with updated project
        // const updatedProjects = projects.map(project =>
        //   project._id === selectedProject._id ? selectedProject : project
        // );
        // setProjects(updatedProjects);

        console.log('Project updated successfully.');
        // Fetch all projects again
        //const { data } = await axios.get('http://localhost:7777/projects/getProjects');
        const {data} = await axios.get('https://buildwell-engineering.vercel.app/projects/getProjects');
        setProjects(data);

      } else {
        throw new Error('Failed to update project.');
      }
    } catch (error) {
      console.error('Error updating project:', error.message);
    }
  }

  return (
    <div className='adminPanelProjects'>
      {
        loading ? (
          <div className='loader'></div>
        ) : (
          <>
            <div className='container'>
              <div className='row d-flex justify-content-center'>
                {projects && projects.length > 0 ? (
                  projects.map((project) => (
                    <>
                      <div key={project.projectTitle} className="card m-2 p-2 col-md-5 col-lg-4 col-12 projectsCard" style={{ overflowY: 'auto' }}>
                        <img
                          src={project.projectMediaUrl}
                          loading="lazy"
                          className="card-img-top img-fluid"
                          alt={`Display for ${project.projectTitle}`}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{project.projectTitle}</h5>
                          <p className="card-text">
                            <b>Description:</b> {project.projectDescription}
                          </p>
                          <button type="button" id="Edit" className='px-5' onClick={() => { editProject(project) }} >
                            Edit
                          </button>
                        </div>
                      </div>

                    </>
                  ))
                ) : (
                  <p>No projects...</p>
                )}
              </div>

              <br />
              <br />
              <hr className='py-2' />

              <div className='row py-4'>
                <div className="col-12 col-lg-8 mx-auto d-flex flex-column justify-content-center align-items-start" style={{ overflowY: 'auto' }}>
                  {newProject.projectMediaUrl ? (
                    <img src={URL.createObjectURL(newProject.projectMediaUrl)} alt={newProject.projectTitle} className="img-fluid" />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '200px', border: '1px solid #ccc', borderRadius: '4px', background: '#f8f9fa' }}>
                      <p className="text-muted">No image selected</p>
                    </div>
                  )}
                  <h2>{newProject.projectTitle}</h2>
                  <p className="description-text">{newProject.projectDescription}</p>
                </div>
                <div className="col-12 col-lg-8 mx-auto">
                  <div>
                    <label>Title: </label>
                    <input
                      type="text"
                      name='projectTitle'
                      value={newProject.projectTitle}
                      onChange={handleNewTitleChange}
                      className='p-2 form-control'
                      style={{ height: 'auto', fontSize: '0.8rem', width: '100%' }}
                    />
                  </div>
                  <div>
                    <label>Image: </label>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      className='p-2 form-control'
                      style={{ height: 'auto', fontSize: '0.8rem' }}
                      onChange={handleNewImageChange}
                    />
                  </div>
                  <div>
                    <label>Description: </label>
                    <textarea
                      name='projectDescription'
                      value={newProject.projectDescription}
                      onChange={handleNewDescriptionChange}
                      className="p-2 form-control"
                      style={{ height: 'auto', fontSize: '0.8rem', width: '100%' }}
                    />
                  </div>
                  <button type="button" className="px-5 reset-btn" onClick={handleNewReset}>
                    Reset
                  </button>
                  <button type="button" className="px-5 submit-btn mx-2" onClick={handleNewSubmit}>
                    Submit
                  </button>
                  <button type="button" className="px-5 submit-btn mx-2" onClick={handleNewSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>


            {
              selectedProject && (
                <div className="lightbox">
                  <div className="lightbox-content">
                    <span className="close" onClick={handleClose} style={{ color: '#EDCD1F', fontSize: '3rem' }}>&times;</span>
                    <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row" style={{ overflow: 'auto' }}>
                      <div className="col-lg-6 lightbox-left text-center text-md-start mb-3 mb-md-0" style={{ overflowY: 'auto' }}>
                        {/* {selectedProject.projectMediaUrl ? (
                            <img src={URL.createObjectURL(selectedProject.projectMediaUrl)} alt={selectedProject.projectTitle} className="img-fluid" />
                          ) : (
                            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '200px', border: '1px solid #ccc', borderRadius: '4px', background: '#f8f9fa' }}>
                              <p className="text-muted">No image selected</p>
                            </div>
                          )} */}
                        {selectedProject.projectMediaUrl ? (
                          <img src={selectedProject.projectMediaUrl instanceof File ? URL.createObjectURL(selectedProject.projectMediaUrl) : selectedProject.projectMediaUrl} alt={selectedProject.projectTitle} className="img-fluid" />
                        ) : (
                          <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '200px', border: '1px solid #ccc', borderRadius: '4px', background: '#f8f9fa' }}>
                            <p className="text-muted">No image selected</p>
                          </div>
                        )}
                        <br />
                        <h2>{selectedProject.projectTitle}</h2>
                        <p className="description-text">{selectedProject.projectDescription}</p>
                      </div>
                      <div className="col-lg-6 lightbox-right text-start p-2">
                        <div className="mb-3">
                          <label htmlFor="titleInput" className="form-label">Title:</label>
                          <input type="text" id="titleInput" name="title" className="form-control" value={selectedProject.projectTitle} onChange={handleTitleChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="imageInput" className="form-label">Image:</label>
                          <input type="file" id="imageInput" name="image" className="form-control" /*value={selectedProject.img}*/ onChange={handleImageChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="descriptionTextarea" className="form-label">Description:</label>
                          <textarea id="descriptionTextarea" name="description" className="form-control" value={selectedProject.projectDescription} onChange={handleDescriptionChange} rows={3} style={{ resize: 'vertical' }} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="descriptionTextarea" className="form-label">Display:</label>
                          <input type='checkbox' name='display' className='form-control form-check-input' value={selectedProject.projectDisplay}
                            onChange={handleDisplayChange} />
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="button" className="btn btn-secondary me-2" onClick={handleReset}>Reset</button>
                          <button type="button" className="btn btn-primary me-2" onClick={handleUpdate}>Submit</button>
                          <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </>
        )
      }




    </div>
  );
};

export default Projects;
