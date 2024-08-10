// import React,{useEffect} from 'react';
// import AboutUsComponent from '../../components/AboutUsComponent';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSectionData } from '../../store/slices/SectionsSLice';
// import axios from 'axios';

// export default function AboutUs() {

//   const dispatch = useDispatch();
//   const aboutUsData = useSelector(state => state.sections.aboutUs);
//   console.log(aboutUsData)

//   useEffect(() => {
//     const fetchAboutUsData = async () => {
//       console.log(12222)
//       try {
//         console.log('kkl')
//         const response = await axios.get('http://localhost:7777/homePage/getData/aboutUs');
//         // const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/aboutUs');
//        console.log(response)
//         dispatch(setSectionData({ sectionName: 'aboutUs', data: response.data }));
//         // console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching about us data:', error);
//         // Handle error state or retries here
//       }
//     };
//     console.log(aboutUsData)

//     fetchAboutUsData();
//   }, []); // dispatch


//   return (
//     <div id="AboutUs" className="scroll-section">   
//       <AboutUsComponent  media={aboutUsData.sectionMediaUrl} text={aboutUsData.sectionText} />
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import AboutUsComponent from '../../components/AboutUsComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import './styles/AboutUs.css'; // Adjust the path as necessary

export default function AboutUs() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const aboutUsData = useSelector(state => state.sections.aboutUs);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/aboutUs');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/aboutUs');
        dispatch(setSectionData({ sectionName: 'aboutUs', data: response.data }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching about us data:', error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchAboutUsData();
  }, [dispatch]);

  if (loading || !aboutUsData || !aboutUsData.sectionText) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  return (
    <div id="AboutUs" className="scroll-section">   
      <AboutUsComponent
        media={aboutUsData.sectionMediaUrl}
        text={aboutUsData.sectionText}
      />
    </div>
  );
}
