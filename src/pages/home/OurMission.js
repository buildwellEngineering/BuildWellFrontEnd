

import React, { useEffect, useState } from 'react';
import OurMissionComponent from '../../components/OurMissionComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import './styles/OurMission.css'; // Adjust the path as necessary
import { Helmet } from 'react-helmet';

export default function OurMission() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://buildwellengineering.com",
    "name": "BuildWell Construction - Home",
    "description": "BuildWell Construction is dedicated to redefining the construction industry with exceptional quality, innovative solutions, and sustainable practices. Explore our mission and technologies on our homepage.",
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Our Mission",
        "description": "Our mission at BuildWell Construction is to redefine the landscape of construction by delivering exceptional quality, innovative solutions, and unparalleled service."
      },
      {
        "@type": "CreativeWork",
        "name": "Our Technologies",
        "description": "At BuildWell Construction, we embrace cutting-edge technologies and sustainable practices, building not just for today, but for a resilient future."
      }
    ]
  }
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const ourMissionOurTechnologiesData = useSelector(state => state.sections.ourMissionOurTechnologies);

  useEffect(() => {
    const fetchOurMissionOurTechnologiesData = async () => {
      try {
        const response = await axios.get(`https://buildwell-engineering.vercel.app/homePage/getData/ourMissionOurTechnologies`);

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
        <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  return (
    <div id="OurMission" className="scroll-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>
      <OurMissionComponent
        media={ourMissionOurTechnologiesData.sectionMediaUrl}
        ourMissionPara={ourMissionOurTechnologiesData.sectionText1}
        ourTechnologiesPara={ourMissionOurTechnologiesData.sectionText2}
      />
    </div>
  );
}
