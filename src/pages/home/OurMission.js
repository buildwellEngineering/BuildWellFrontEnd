// import React,{useEffect} from 'react';
// import OurMissionComponent from '../../components/OurMissionComponent';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSectionData } from '../../store/slices/SectionsSLice';
// import axios from 'axios';

// export default function OurMission() {

//   const dispatch = useDispatch();
//   const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);

//   useEffect(() => {
//     const fetchOurMissionOurTechnologiesData = async () => {
//       try {
//         const response = await axios.get('http://localhost:7777/homePage/getData/ourMissionOurTechnologies');
//         // const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies');

//         dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: response.data }));
//         // console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching ourMissionOurTechnologies data:', error);
//         // Handle error state or retries here
//       }
//     };

//     fetchOurMissionOurTechnologiesData();
//   }, [dispatch]);

//   return (
//     <div id="OurMission" className="scroll-section">

//       <OurMissionComponent media={ourMissionOurTechnologiesData.sectionMediaUrl} ourMissionPara={ourMissionOurTechnologiesData.sectionText1} ourTechnologiesPara={ourMissionOurTechnologiesData.sectionText2} />

//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import OurMissionComponent from '../../components/OurMissionComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import './styles/OurMission.css'; // Adjust the path as necessary

export default function OurMission() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);

  useEffect(() => {
    const fetchOurMissionOurTechnologiesData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/ourMissionOurTechnologies');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies');

        dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: response.data }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ourMissionOurTechnologies data:', error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchOurMissionOurTechnologiesData();
  }, [dispatch]);

  if (loading || !ourMissionOurTechnologiesData) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  return (
    <div id="OurMission" className="scroll-section">
      <OurMissionComponent
        media={ourMissionOurTechnologiesData.sectionMediaUrl}
        ourMissionPara={ourMissionOurTechnologiesData.sectionText1}
        ourTechnologiesPara={ourMissionOurTechnologiesData.sectionText2}
      />
    </div>
  );
}
