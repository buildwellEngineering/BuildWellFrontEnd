


import React, { useEffect, useState } from 'react';
import AboutUsComponent from '../../components/AboutUsComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import './styles/AboutUs.css'; // Adjust the path as necessary
import { Helmet } from 'react-helmet';

export default function AboutUs() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuildWell Construction",
    "url": "https://buildwellengineering.com",
    "logo": "https://buildwellengineering.com/logo512.png",
    "description": "BuildWell Construction is a leading construction company specializing in residential, commercial, institutional, and industrial projects, delivering high-quality work since 2010.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "322 Arenja Corner, plot no. 73, SEC-17 VASHI",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "MH",
      "postalCode": "400703",
      "addressCountry": "IN"
    }
  }
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const aboutUsData = useSelector(state => state.sections.aboutUs);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await axios.get(`https://buildwell-engineering.vercel.app/homePage/getData/aboutUs`,{withCredentials:true});
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
       <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>   
      <AboutUsComponent
        media={aboutUsData.sectionMediaUrl}
        text={aboutUsData.sectionText}
      />
    </div>
  );
}
