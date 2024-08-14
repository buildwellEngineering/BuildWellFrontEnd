

import React, { useEffect, useState } from 'react';
import './styles/Projects.css'
import useAxiosInstance from '../../axiosInstance/AxiosInstance';

const Projects = () => {

  const axiosInstance = useAxiosInstance();

  const [projects, setProjects] = useState([]);
  const [resetProjects, setResetProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(false); 
  const [newImage, setNewImage] = useState(false); 
  const [loading, setLoading] = useState(false);


  const fetchProjects = async () => {

    setLoading(true);

    try {
      const response = await axiosInstance.get('/projects/getProjects');
      setProjects(response.data);
      setResetProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    fetchProjects();

  }, [])

  const editProject = (project) => {
    setSelectedProject(project)
    setNewImage(false); 
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
    setSelectedProject({ ...selectedProject, projectTitle: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setSelectedProject({ ...selectedProject, projectDescription: event.target.value });
  };

  const handleDisplayChange = (e) => {
    setSelectedProject({ ...selectedProject, projectDisplay: e.target.checked ? true : false  })
  }

  const handleReset = () => {
    setProjects(resetProjects);
    if (selectedProject) {
      const originalProject = resetProjects.find(project => project.id === selectedProject.id);
      setSelectedProject(originalProject);
    }
  };


  const [newProject, setNewProject] = useState({
    projectTitle: '',
    projectDescription: '',
    projectMediaUrl: null, 
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


      const response = await axiosInstance.post('/projects/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })

      if (response.status === 201) {
        const data = response.data;
        alert("Successfully added a project !!!");
        setNewProject({
          projectTitle: '',
          projectDescription: '',
          projectMediaUrl: null,
        });
      } else {
        alert("Failed to add a project.")
        throw new Error('Failed to submit project.');
      }
    } catch (error) {
      console.error('Error adding new project:', error.message);
    }
  };


  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/projects/delete`, {
        data: { projectId: selectedProject._id }
      });

      if (response.status === 200) {
        alert("Successfully deleted project.");
        const updatedProjects = projects.filter(project => project._id !== selectedProject._id);
        setProjects(updatedProjects);
        setSelectedProject({});
      } else {
        alert("Failed to delete project.");
        throw new Error('Failed to delete project.');
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
    }
  }

  const handleUpdate = async () => {
    try {
      
      const formData = new FormData();
      formData.append('title', selectedProject.projectTitle);
      formData.append('description', selectedProject.projectDescription);
      formData.append('mediaUrlupdate', selectedProject.projectMediaUrl);
      formData.append('projectDisplay',setSelectedProject.projectDisplay);
      formData.append('_id', selectedProject._id);
      formData.append('imageUpdated', newImage ? 'true' : 'false'); 

      console.log(selectedProject.projectDisplay)

      const response = await axiosInstance.put(`/projects/update`, formData);

      if (response.status === 200) {
        const {data} = await axiosInstance.get('/projects/getProjects');
        setProjects(data);
        alert("Successfully updated project !!!");

        setSelectedProject(false);

      } else {
        alert("Failed to update project.");
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
                      <div key={project.projectTitle} className="card m-2 p-2 col-md-5 col-lg-4 col-12 projectsCard" style={{ overflowY: 'auto', border: '2px solid #00365E' }}>
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
                <div className="col-12 col-lg-8 mx-auto d-flex flex-column justify-content-center align-items-start" style={{ overflowY: 'auto', color:'#00365E' }}>
                  {newProject.projectMediaUrl ? (
                    <img src={URL.createObjectURL(newProject.projectMediaUrl)} alt={newProject.projectTitle} className="img-fluid" />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '200px', border: '2px solid #00365E', borderRadius: '4px', background: '#f8f9fa' ,color:'#00365E' }}>
                      <p className="text-muted">No image selected</p>
                    </div>
                  )}
                  <h2>{newProject.projectTitle}</h2>
                  <p className="description-text">{newProject.projectDescription}</p>
                </div>
                <div className="col-12 col-lg-8 mx-auto" style={{ color:'#00365E'}}>
                  <div>
                    <label>Title: </label>
                    <input
                      type="text"
                      name='projectTitle'
                      value={newProject.projectTitle}
                      onChange={handleNewTitleChange}
                      className='p-2 form-control'
                      style={{ height: 'auto', fontSize: '0.8rem', width: '100%',border: '2px solid #00365E' }}
                    />
                  </div>
                  <div>
                    <label>Image: </label>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      className='p-2 form-control'
                      style={{ height: 'auto', fontSize: '0.8rem', border: '2px solid #00365E' }}
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
                      style={{ height: 'auto', fontSize: '0.8rem', width: '100%', border: '2px solid #00365E' }}
                    />
                  </div>
                  <br />
                  <div className='d-flex justify-content-end align-items-center mb-5'>
                  <button type="button" className="px-5 reset-btn" onClick={handleNewReset} style={{backgroundColor:'#00365E', color:'#EDCD1F'}}>
                    Reset
                  </button>
                  <button type="button" className="px-5 submit-btn mx-2" onClick={handleNewSubmit} style={{backgroundColor:'#00365E', color:'#EDCD1F'}}>
                    Submit
                  </button>
                  </div>
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
