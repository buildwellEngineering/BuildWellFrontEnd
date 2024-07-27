import React,{useEffect} from 'react';
import OurMissionComponent from '../../components/OurMissionComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';

export default function OurMission() {

  const dispatch = useDispatch();
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);

  useEffect(() => {
    const fetchOurMissionOurTechnologiesData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/ourMissionOurTechnologies');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies');

        dispatch(setSectionData({ sectionName: 'ourMissionOurTechnologies', data: response.data }));
        // console.log(response.data)
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
