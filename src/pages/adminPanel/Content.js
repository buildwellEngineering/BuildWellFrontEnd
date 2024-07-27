import React, { useEffect, useState } from 'react';
import AboutUsComponent from '../../components/AboutUsComponent.js';
import OurMissionComponent from '../../components/OurMissionComponent.js';
import HeaderComponent from '../../components/HeaderComponent.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export default function Content() {

  const dispatch = useDispatch();
  const aboutUsData = useSelector(state => state.sections.aboutUs);
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);
  const headerData = useSelector(state => state.sections.header);

  const [aboutusImageChange,setAboutusImageChange] = useState(false);
  const [ourMissionOurTechnologiesImageChange,setOurMissionOurTechnologiesImageChange] = useState(false);
  const [headerVideoChange0,setHeaderVideoChange0] = useState(false);
  const [headerImageChange1,setHeaderImageChange1] = useState(false);

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
        // const response = await axios.get('http://localhost:7777/homePage/getData/aboutUs');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/aboutUs');
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
        //const response = await axios.get('http://localhost:7777/homePage/getData/ourMissionOurTechnologies');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies');
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
        //const response = await axios.get('http://localhost:7777/homePage/getData/header');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/header');
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
    // const { name, value, type, files } = e.target;
    // if (type === 'file') {
    //   // const file = files[0];
    //   // const reader = new FileReader();
    //   // reader.readAsDataURL(file);
    //   // reader.onloadend = () => {
    //   //   setAboutUs({ ...aboutUs, [name]: reader.result });
    //   //   setAboutusImageChange(true);
    //   // };
    //   setAboutUs({...aboutUs,[name]:files[0]})
    //   setAboutusImageChange(true);
    // } else {
    //   setAboutUs({ ...aboutUs, [name]: value });
    // }

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
      // const file = files[0];
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onloadend = () => {
      //   setOurMissionOurTechnologies({ ...ourMissionOurTechnologies, [name]: reader.result });
      // };
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
    // const { name, type } = e.target;
    // if (type === 'file') {
    //   const file = e.target.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = () => {
    //     // Check if the input is for video or image
    //     if (name === 'videoFile') {
    //       // Update video file
    //       setHeader({ ...header, sectionMedia: [reader.result, header.sectionMedia[1]] });
    //     } else if (name === 'imageFile') {
    //       // Update image file
    //       setHeader({ ...header, sectionMedia: [header.sectionMedia[0], reader.result] });
    //     }
    //   };
    // } else {
    //   // Handle text inputs
    //   setHeader({ ...header, [name]: e.target.value });
    // }
    const { name, value, type, files } = e.target;
    if (type === 'file') {
     if(files && files.length > 0){
      const file= files[0]
      if(name==='videoFile'){
        console.log(file)
        setHeader({...header, sectionMediaUrl: [file, header.sectionMediaUrl[1]]})
        setHeaderVideoChange0(true)
      }
      if(name==='imageFile'){
        setHeader({...header, sectionMediaUrl: [header.sectionMediaUrl[0], file]})
        setHeaderImageChange1(true)
      }
     }else{
      setHeaderVideoChange0(false);
      setHeaderImageChange1(false);
      e.target.value=null
     }
    } else {
      setHeader({ ...header, [name]: value });
    }
  };

  const handleSubmitAboutUs = async (e) => {
    // e.preventDefault();

    // try {
    //   const response = await axios.put('http://localhost:7777/update/aboutUs', {
    //     sectionName: 'aboutUs',
    //     data: { sectionText: aboutUs.sectionText, sectionMediaUrl: aboutUs.sectionMediaUrl, imageChange: aboutusImageChange ? 'true' : 'false' }
    //   });

    //   if (response.status >= 200 && response.status < 300) {
    //     dispatch(setSectionData({ sectionName: 'aboutUs', data: { sectionText: aboutUs.sectionText, sectionMediaUrl: aboutUs.sectionMediaUrl } }));
    //     console.log('Data updated successfully on the server');
    //   } else {
    //     throw new Error('Failed to update data on the server');
    //   }
    // } catch (error) {
    //   console.error('Error updating data:', error);
    // }


    e.preventDefault();

    const formData = new FormData();
    formData.append('sectionName', 'aboutUs');
    formData.append('sectionText', aboutUs.sectionText);
    formData.append('imageChange', aboutusImageChange.toString());

    if (aboutusImageChange) {
      formData.append('sectionMediaUrl', aboutUs.sectionMediaUrl);
    }

    try {
      console.log(aboutusImageChange,aboutusImageChange.toString(),aboutUs.sectionText)
      //const response = await axios.put('http://localhost:7777/update/aboutUs', formData);
      const response = await axios.put('https://buildwell-engineering.vercel.app/update/aboutUs',formData);

      if (response.status >= 200 && response.status < 300) {
        // dispatch(setSectionData({ sectionName: 'aboutUs', data: { sectionText: aboutUs.sectionText, sectionMediaUrl: aboutUs.sectionMediaUrl } }));
        console.log('Data updated successfully on the server');
      } else {
        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleSubmitOurMission = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.put('http://localhost:7777/update/ourMissionOurTechnologies', {
    //     sectionName: 'ourMissionOurTechnologies',
    //     data: { sectionText1: ourMissionOurTechnologies.sectionText1, sectionText2: ourMissionOurTechnologies.sectionText2, sectionMedia: ourMissionOurTechnologies.sectionMedia }
    //   });

    //   if (response.status >= 200 && response.status < 300) {
    //     dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: { sectionText1: ourMissionOurTechnologies.sectionText1, sectionText2: ourMissionOurTechnologies.sectionText2, sectionMedia: ourMissionOurTechnologies.sectionMedia } }));
    //     console.log('Data updated successfully on the server');
    //   } else {
    //     throw new Error('Failed to update data on the server');
    //   }
    // } catch (error) {
    //   console.error('Error updating data:', error);
    // }

    const formData = new FormData();
    formData.append('sectionName', 'ourMissionOurTechnologies');
    formData.append('sectionText1', ourMissionOurTechnologies.sectionText1);
    formData.append('sectionText2', ourMissionOurTechnologies.sectionText2);
    formData.append('imageChange', ourMissionOurTechnologiesImageChange.toString());

    if (ourMissionOurTechnologiesImageChange) {
      formData.append('sectionMediaUrl', ourMissionOurTechnologies.sectionMediaUrl);
    }

    try {
      //console.log(ourMissionOurTechnologies,ourMissionOurTechnologiesImageChange.toString(),ourMissionOurTechnologies.sectionText1,ourMissionOurTechnologies.sectionText2)
      //const response = await axios.put('http://localhost:7777/update/ourMissionOurTechnologies', formData);
      const response = await axios.put('https://buildwell-engineering.vercel.app/update/ourMissionOurTechnologies', formData);

      if (response.status >= 200 && response.status < 300) {
        // dispatch(setSectionData({ sectionName: 'aboutUs', data: { sectionText: aboutUs.sectionText, sectionMediaUrl: aboutUs.sectionMediaUrl } }));
        console.log('Data updated successfully on the server');
      } else {
        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }

  };

  const handleSubmitHeader = async (e) => {
    // e.preventDefault();

    // try {
    //   const response = await axios.put('http://localhost:7777/update/header', {
    //     sectionName: 'header',
    //     data: { sectionText: header.sectionText, sectionMedia: header.sectionMedia }
    //   });

    //   if (response.status >= 200 && response.status < 300) {
    //     dispatch(setSectionData({ sectionName: 'header', data: { sectionText: header.sectionText, sectionMedia: header.sectionMedia } }));
    //     console.log('Data updated successfully on the server');
    //   } else {
    //     throw new Error('Failed to update data on the server');
    //   }
    // } catch (error) {
    //   console.error('Error updating data:', error);
    // }

    e.preventDefault();

    const formData = new FormData();
    formData.append('sectionName', 'header');
    formData.append('sectionText', header.sectionText);
    formData.append('videoChange0', headerVideoChange0.toString());
    formData.append('imageChange1', headerImageChange1.toString());

    if (headerImageChange1) {
      formData.append('imageFile', header.sectionMediaUrl[1]);
    }
    if (headerVideoChange0){
      formData.append('videoFile', header.sectionMediaUrl[0])
    }

    try {
      console.log(headerVideoChange0,headerImageChange1,headerVideoChange0.toString(),headerImageChange1.toString(),header.sectionText)
      //const response = await axios.put('http://localhost:7777/update/header', formData);
      const response = await axios.put('https://buildwell-engineering.vercel.app/update/header', formData);

      if (response.status >= 200 && response.status < 300) {
        // dispatch(setSectionData({ sectionName: 'aboutUs', data: { sectionText: aboutUs.sectionText, sectionMediaUrl: aboutUs.sectionMediaUrl } }));
        console.log('Data updated successfully on the server');
        setHeaderImageChange1(false)
        setHeaderVideoChange0(false)
      } else {
        throw new Error('Failed to update data on the server');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }

  };

  const mediaPreviewAboutUS = aboutusImageChange ? URL.createObjectURL(aboutUs.sectionMediaUrl) : aboutUs.sectionMediaUrl;
  const mediaPreviewOurMissionOurtechnologies = ourMissionOurTechnologiesImageChange ? URL.createObjectURL(ourMissionOurTechnologies.sectionMediaUrl) : ourMissionOurTechnologies.sectionMediaUrl;
  //const mediaPreviewHeader0 = headerVideoChange0 ? URL.createObjectURL(header.sectionMediaUrl[0]) : header.sectionMediaUrl[0];
  const mediaPreviewHeader1 = headerImageChange1 ? URL.createObjectURL(header.sectionMediaUrl[1]) : header.sectionMediaUrl[1];

  return (
    <div className='p-4'>
      <h1>Content</h1>
      <p>Content goes here...</p>

      <>
        <div style={{ height: '500px !important' }}>
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
            <div>
              <input type='submit' name='submit' value='Submit' />
            </div>
          </form>
        </div>
      </>

      <>
        <div style={{ height: '500px !important' }}>
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
            <div>
              <input type='submit' name='submit' value='Submit' />
            </div>
          </form>
        </div>
      </>

      <>
        <div style={{ height: '500px !important' }}>
          {/* <HeaderComponent mediaVideo={header.sectionMediaUrl[0]} mediaImage={header.sectionMediaUrl[1]} text1={header.sectionText.split(';')[0]} text2={header.sectionText.split(';')[1]} text3={header.sectionText.split(';')[2]} /> */}
          <HeaderComponent mediaVideo={header.sectionMediaUrl[0]} mediaImage={mediaPreviewHeader1} text1={header.sectionText.split(';')[0]} text2={header.sectionText.split(';')[1]} text3={header.sectionText.split(';')[2]} />
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
              <label>Video: </label>
              <input type='file' name='videoFile' accept="video/mp4" onChange={changeHeader} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div>
              <label>Image: </label>
              <input type='file' name='imageFile' onChange={changeHeader} className='p-2' style={{ height: 'auto' }} />
            </div>
            <div>
              <input type='submit' value='submit' name='submit' />
            </div>
          </form>
        </div>
        </>
      </div>
  )
}  
