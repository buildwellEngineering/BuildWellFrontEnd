import React, { useEffect, useState } from 'react';
import AboutUsComponent from '../../components/AboutUsComponent.js';
import OurMissionComponent from '../../components/OurMissionComponent.js';
import HeaderComponent from '../../components/HeaderComponent.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import useAxiosInstance from '../../axiosInstance/AxiosInstance.js'

export default function Content() {

  const dispatch = useDispatch();
  const axiosInstance = useAxiosInstance(); // Use the custom axios instance
  const aboutUsData = useSelector(state => state.sections.aboutUs);
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);
  const headerData = useSelector(state => state.sections.header);

  const [aboutusImageChange,setAboutusImageChange] = useState(false);
  const [ourMissionOurTechnologiesImageChange,setOurMissionOurTechnologiesImageChange] = useState(false);
  // const [headerVideoChange0,setHeaderVideoChange0] = useState(false);
  const [mediaImageDesktopChange1,setMediaImageDesktopChange1] = useState(false);
  const [headerImageChange1,setHeaderImageChange1] = useState(false);

  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState({ name: '', value: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axiosInstance.get('/homePage/getData/counter')
        .then(response => setAchievements(response.data))
        .catch(error => console.error('Error fetching achievements:', error));
}, []);

const handleAddOrUpdate = () => {
  if (editingId) {
    // Update existing achievement
    axiosInstance.put(`/update/counterUpdate/${editingId}`, newAchievement)
      .then(response => {
        setAchievements(achievements.map(achievement =>
          achievement._id === editingId ? response.data : achievement
        ));
        alert("Updated Successfully !!!");
        resetForm();
      })
      .catch(error => {
        console.error('Error updating achievement:', error);
        alert("Failed to update achievement. Please try again.");
      });
  } else {
    // Add new achievement
    axiosInstance.post('/update/counterAdd', newAchievement)
      .then(response => {
        setAchievements([...achievements, response.data]);
        alert("Added Successfully !!!");
        resetForm();
      })
      .catch(error => {
        console.error('Error adding achievement:', error);
        alert("Failed to add achievement. Please try again.");
      });
  }
};


const handleDelete = (id) => {
  axiosInstance.delete(`https://buildwell-engineering.vercel.app/update/counterDelete/${id}`)
    .then(() => {
      setAchievements(achievements.filter(achievement => achievement._id !== id));
      alert("Deleted successfully !!!");
    })
    .catch(error => {
      console.error('Error deleting achievement:', error);
      alert("Failed to delete achievement. Please try again.");
    });
};

  

  const resetForm = () => {
    setNewAchievement({ name: '', value: '' });
    setEditingId(null);
  };

  // Initialize local state
  const [aboutUs, setAboutUs] = useState({
    sectionText: aboutUsData.sectionText || '',
    sectionName: 'aboutUs',
    sectionMediaUrl: aboutUsData.sectionMediaUrl || ''
  });

  const [ourMissionOurTechnologies, setOurMissionOurTechnologies] = useState({
    sectionText1: ourMissionOurTechnologiesData.sectionText1 || '',
    sectionText2: ourMissionOurTechnologiesData.sectionText2 || '',
    sectionName: 'ourMissionOurTechnologies',
    sectionMediaUrl: ourMissionOurTechnologiesData.sectionMediaUrl || ''
  });

  const [header, setHeader] = useState({
    sectionText: headerData.sectionText || '',
    sectionName: 'header',
    sectionMediaUrl: headerData.sectionMediaUrl || ['', ''] // Default empty array or appropriate initial values
  });

  useEffect(() => {
    const fetchDataAboutUs = async () => {
      try {
        const response = await axiosInstance.get('/homePage/getData/aboutUs');
        const record = response.data;
        dispatch(setSectionData({ sectionName: 'aboutUs', data: record }));
      } catch (error) {
        console.error('Error fetching about us data:', error);
      }
    };

    if (!aboutUsData || !aboutUsData.sectionText) {
      fetchDataAboutUs();
    } else {
      setAboutUs({
        sectionText: aboutUsData.sectionText,
        sectionName: 'aboutUs',
        sectionMediaUrl: aboutUsData.sectionMediaUrl || ''
      });
    }

    const fetchDataOurMissionOurTechnologies = async () => {
      try {
        const response = await axios.get(`https://buildwell-engineering-gray.vercel.app/homePage/getData/ourMissionOurTechnologies`,{withCredentials:true});
        const record = response.data;
        dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: record }));
      } catch (error) {
        console.error('Error fetching ourMissionOurTechnologies data:', error);
      }
    };

    if (!ourMissionOurTechnologiesData || !ourMissionOurTechnologiesData.sectionText1) {
      fetchDataOurMissionOurTechnologies();
    } else {
      setOurMissionOurTechnologies({
        sectionText1: ourMissionOurTechnologiesData.sectionText1,
        sectionText2: ourMissionOurTechnologiesData.sectionText2,
        sectionName: 'ourMissionOurTechnologies',
        sectionMediaUrl: ourMissionOurTechnologiesData.sectionMediaUrl || ''
      });
    }

    const fetchDataHeader = async () => {
      try {
        const response = await axios.get(`https://buildwell-engineering-gray.vercel.app/homePage/getData/header`,{withCredentials:true});
        const record = response.data;
        dispatch(setSectionData({ sectionName: 'header', data: record }));
      } catch (error) {
        console.error('Error fetching header data:', error);
      }
    };

    if (!headerData || !headerData.sectionText) {
      fetchDataHeader();
    } else {
      setHeader({
        sectionText: headerData.sectionText,
        sectionName: 'header',
        sectionMediaUrl: headerData.sectionMediaUrl || ['', ''] // Ensure this matches your backend response structure
      });
    }
  }, []); //aboutUsData, ourMissionOurTechnologiesData, headerData, dispatch

  const changeAboutUs = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (files && files.length > 0) {
        // If a file is selected, update the state
        setAboutUs({ ...aboutUs, [name]: files[0] });
        setAboutusImageChange(true);
      } else {
        // If no file is selected, reset the file-related state
        setAboutusImageChange(false);
        // Optionally, you could clear the file input field if needed
        e.target.value = null;
      }
    } else {
      setAboutUs({ ...aboutUs, [name]: value });
    }
  };

  const changeOurMissionOurTechnologies = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
     if(files && files.length > 0){
      setOurMissionOurTechnologies({...ourMissionOurTechnologies, [name]: files[0]})
      setOurMissionOurTechnologiesImageChange(true);
     }else{
      setOurMissionOurTechnologiesImageChange(false);
      e.target.value=null
     }
    } else {
      setOurMissionOurTechnologies({ ...ourMissionOurTechnologies, [name]: value });
    }
  };

  const changeHeader = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
     if(files && files.length > 0){
      const file= files[0]
      if(name==='mediaImageDesktopFile'){
        // console.log(file)
        setHeader({...header, sectionMediaUrl: [file, header.sectionMediaUrl[1]]})
        // setHeaderVideoChange0(true)
        setMediaImageDesktopChange1(true)

      }
      if(name==='imageFile'){
        setHeader({...header, sectionMediaUrl: [header.sectionMediaUrl[0], file]})
        setHeaderImageChange1(true)
      }
     }else{
      // setHeaderVideoChange0(false);
       setMediaImageDesktopChange1(false);
      setHeaderImageChange1(false);
      e.target.value=null
     }
    } else {
      setHeader({ ...header, [name]: value });
    }
  };

  const handleSubmitAboutUs = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sectionName', 'aboutUs');
    formData.append('sectionText', aboutUs.sectionText);
    formData.append('imageChange', aboutusImageChange.toString());

    if (aboutusImageChange) {
      formData.append('sectionMediaUrl', aboutUs.sectionMediaUrl);
    }

    try {
      const response = await axiosInstance.put('/update/aboutUs',formData);

      if (response.status >= 200 && response.status < 300) {
        alert("Updated Successfully !!!");
      } else {
        alert("Error updating About Us, Please try again");

        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleSubmitOurMission = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sectionName', 'ourMissionOurTechnologies');
    formData.append('sectionText1', ourMissionOurTechnologies.sectionText1);
    formData.append('sectionText2', ourMissionOurTechnologies.sectionText2);
    formData.append('imageChange', ourMissionOurTechnologiesImageChange.toString());

    if (ourMissionOurTechnologiesImageChange) {
      formData.append('sectionMediaUrl', ourMissionOurTechnologies.sectionMediaUrl);
    }

    try {
      const response = await axiosInstance.put('/update/ourMissionOurTechnologies', formData);

      if (response.status >= 200 && response.status < 300) {
        alert("Updated Successfully !!!");
      } else {
        alert("Error updating Our Mission and Our Technologies, Please try again");
        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }

  };

  const handleSubmitHeader = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sectionName', 'header');
    formData.append('sectionText', header.sectionText);
    // formData.append('videoChange0', headerVideoChange0.toString());
    formData.append('mediaImageDesktopChange1', mediaImageDesktopChange1.toString());
    formData.append('imageChange1', headerImageChange1.toString());

    if (headerImageChange1) {
      formData.append('imageFile', header.sectionMediaUrl[1]);
    }
    // if (headerVideoChange0){
    //   formData.append('videoFile', header.sectionMediaUrl[0])
    // }
    if (mediaImageDesktopChange1) {
      formData.append('mediaImageDesktopFile', header.sectionMediaUrl[0]);
    }

    try {
      const response = await axiosInstance.put('/update/header', formData);


      if (response.status >= 200 && response.status < 300) {
        alert("Updated Successfully !!!");
        setHeaderImageChange1(false)
        setMediaImageDesktopChange1(false)
      } else {
        alert("Error updating Header, Please try again");
        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }

  };

  const mediaPreviewAboutUS = aboutusImageChange ? URL.createObjectURL(aboutUs.sectionMediaUrl) : aboutUs.sectionMediaUrl;
  const mediaPreviewOurMissionOurtechnologies = ourMissionOurTechnologiesImageChange ? URL.createObjectURL(ourMissionOurTechnologies.sectionMediaUrl) : ourMissionOurTechnologies.sectionMediaUrl;
  const mediaPreviewHeader1 = headerImageChange1 ? URL.createObjectURL(header.sectionMediaUrl[1]) : header.sectionMediaUrl[1];

  const mediaImageDesktopPreviewHeader2 = mediaImageDesktopChange1 ? URL.createObjectURL(header.sectionMediaUrl[0]) : header.sectionMediaUrl[0];


  return (
    <div className='p-4'>
      <div className='d-flex jutsify-content-center flex-column align-items-center my-4'>
      <h1 className='' style={{ color:'#00365E', fontSize:'3rem'}}>CONTENT</h1>
      <div className='' style={{backgroundColor:'#EDCD1F', height:'10px' , width:'150px'}} ></div>
      </div>

      <br />

      <>
        <div style={{ height: '500px !important' }} className='my-2'>
          <AboutUsComponent media={mediaPreviewAboutUS} text={aboutUs.sectionText} />
        </div>
        <div>
          <form onSubmit={handleSubmitAboutUs}>
            <div>
              <label>Text: </label>
              <textarea type='text' name='sectionText' value={aboutUs.sectionText} onChange={changeAboutUs} />
            </div>
            <div>
              <label>Image: </label>
              <input type='file' name='sectionMediaUrl' onChange={changeAboutUs} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div className='my-2'>
              <input type='submit' name='submit' value='Submit' />
            </div>
          </form>
        </div>
      </>

      <br />

      <>
        <div style={{ height: '500px !important' }} className='my-2'>
          <OurMissionComponent media={mediaPreviewOurMissionOurtechnologies} ourMissionPara={ourMissionOurTechnologies.sectionText1} ourTechnologiesPara={ourMissionOurTechnologies.sectionText2} />
        </div>
        <div>
          <form onSubmit={handleSubmitOurMission}>
            <div>
              <label>Text OurMission: </label>
              <textarea type='text' name='sectionText1' value={ourMissionOurTechnologies.sectionText1} onChange={changeOurMissionOurTechnologies} />
            </div>
            <div>
              <label>Text ourTechnologies: </label>
              <textarea type='text' name='sectionText2' value={ourMissionOurTechnologies.sectionText2} onChange={changeOurMissionOurTechnologies} />
            </div>
            <div>
              <label>Image: </label>
              <input type='file' name='sectionMediaUrl' onChange={changeOurMissionOurTechnologies} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div className='my-2'>
              <input type='submit' name='submit' value='Submit' />
            </div>
          </form>
        </div>
      </>

      <br />

      <>
        <div style={{ height: '500px !important' }} className='my-2'>
          <HeaderComponent /*mediaVideo={header.sectionMediaUrl[0]}*/ mediaImageDesktop={mediaImageDesktopPreviewHeader2} mediaImage={mediaPreviewHeader1} text1={header.sectionText.split(';')[0]} text2={header.sectionText.split(';')[1]} text3={header.sectionText.split(';')[2]} />
        </div>
        <div>
          <form onSubmit={handleSubmitHeader}>
            <div>
              <label>Text 1: </label>
              <input type='text' name='sectionText1' value={header.sectionText.split(';')[0]} onChange={(e) => setHeader({ ...header, sectionText: `${e.target.value};${header.sectionText.split(';')[1]};${header.sectionText.split(';')[2]}` })} />
            </div>
            <div>
              <label>Text 2: </label>
              <input type='text' name='sectionText2' value={header.sectionText.split(';')[1]} onChange={(e) => setHeader({ ...header, sectionText: `${header.sectionText.split(';')[0]};${e.target.value};${header.sectionText.split(';')[2]}` })} />
            </div>
            <div>
              <label>Text 3: </label>
              <input type='text' name='sectionText3' value={header.sectionText.split(';')[2]} onChange={(e) => setHeader({ ...header, sectionText: `${header.sectionText.split(';')[0]};${header.sectionText.split(';')[1]};${e.target.value}` })} />
            </div>
            <div>
              <label>Image For Desktop: </label>
              <input type='file' name='mediaImageDesktopFile' onChange={changeHeader} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div>
              <label>Image: </label>
              <input type='file' name='imageFile' onChange={changeHeader} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div className='my-2'>
              <input type='submit' value='submit' name='submit' />
            </div>
          </form>
        </div>
        </>

        <br />

      <>
      <div className="admin-panel my-5">
      <section className="Counter py-5" style={{ background: '#EDCD1F' }}>
                <div className="container">
                    <div className="row px-3 d-flex justify-content-center">
                        {achievements.map(achievement => (
                            <div key={achievement._id} className="col-6 col-lg-3 d-flex justify-content-center flex-column pb-4">
                                <h2 className="fw-bold" style={{ fontSize: '4rem', textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                                    {achievement.value}
                                </h2>
                                <h4 className="fw-bold" style={{ textAlign: 'center', color: '#00365E', opacity: 0.8 }}>
                                    {achievement.name}
                                </h4>
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                <button className="admin-btn m-2" onClick={() => {
                                    setNewAchievement({ name: achievement.name, value: achievement.value });
                                    setEditingId(achievement._id);
                                }} style={{width:'200px'}}>Edit</button>
                                <button className="admin-btn m-2" onClick={() => handleDelete(achievement._id)} style={{width:'200px'}}>Delete</button>
                                 </div> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="admin-panel my-3">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Achievement Name"
                        value={newAchievement.name}
                        onChange={(e) => setNewAchievement({ ...newAchievement, name: e.target.value })}
                        className='my-2'
                    />
                    <input
                        type="number"
                        placeholder="Achievement Value"
                        value={newAchievement.value}
                        onChange={(e) => setNewAchievement({ ...newAchievement, value: e.target.value })}
                        className='my-2'
                    />
                    <div className='d-flex justify-content-end align-items-center my-2'>
                    <button className="admin-btn mx-2 p-2" onClick={handleAddOrUpdate}>
                        {editingId ? 'Update Achievement' : 'Add Achievement'}
                    </button>
                    {editingId && <button className="admin-btn mx-2 p-2" onClick={resetForm}>Cancel</button>}
                    </div>
                </div>
            </section>
        </div>
      </>  
      </div>
  )
}  
