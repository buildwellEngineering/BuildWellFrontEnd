import React,{useEffect} from 'react';
// import OurMissionImg from '../../assests/Images/HomePage/OurMission.jpg';
// import mobView from '../../assests/Images/HomePage/mobView.jpg';

// import './styles/OurMission.css';
import OurMissionComponent from '../../components/OurMissionComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';

export default function OurMission() {

  // const ourMissionPara = 'Our mission at BuildWell Construction is to redefine the landscape of construction by delivering exceptional quality, innovative solutions, and unparalleled service to our clients and face every curveball with strategic planning.'

  // const ourTechnologiesPara = 'Our mission at BuildWell Construction is to redefine the landscape of construction by delivering exceptional quality, innovative solutions, and unparalleled service to our clients and face every curveball with strategic planning.'

  const dispatch = useDispatch();
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);

  useEffect(() => {
    const fetchOurMissionOurTechnologiesData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/ourMissionOurTechnologies');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies');
        // console.log(response.data)
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        // console.log('API response:', 111);
        dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: response.data }));
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching ourMissionOurTechnologies data:', error);
        // Handle error state or retries here
      }
    };

    fetchOurMissionOurTechnologiesData();
  }, [dispatch]);

  return (
    <div id="OurMission" className="scroll-section">

      <OurMissionComponent media={ourMissionOurTechnologiesData.sectionMediaUrl} ourMissionPara={ourMissionOurTechnologiesData.sectionText1} ourTechnologiesPara={ourMissionOurTechnologiesData.sectionText2} />

    </div>
  );
}
