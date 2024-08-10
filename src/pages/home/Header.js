// import React,{useEffect,useState} from 'react';
// import HeaderComponent from '../../components/HeaderComponent';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSectionData } from '../../store/slices/SectionsSLice';
// import axios from 'axios';
// import './styles/Header.css';

// export default function Header() {

//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const headerData = useSelector(state => state.sections.header);

//   useEffect(() => {
//     const fetchHeaderData = async () => {
//       try {
//         const response = await axios.get('http://localhost:7777/homePage/getData/header');
//         // const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/header');
//         dispatch(setSectionData({ sectionName: 'header', data: response.data }));
//         setLoading(false); 
//       } catch (error) {
//         console.error('Error fetching header data:', error);
//         // Handle error state or retries here
//       }
//     };

//     fetchHeaderData();
//   }, [dispatch]);

//   console.log('Header data from Redux:', headerData);

//   // Ensure headerData and sectionText are defined before accessing
//   if (loading || !headerData || !headerData.sectionText) {
//     return <div>Loading...</div>; // Or render a loading spinner or placeholder
//   }

//   const sectionTextParts = headerData.sectionText.split(';');

//   return (
//     <section id="Header" className="scroll-section">
      

//       <HeaderComponent
//         mediaVideo={headerData.sectionMediaUrl[0]} 
//         mediaImage={headerData.sectionMediaUrl[1]} 
//         text1={sectionTextParts[0]}
//         text2={sectionTextParts[1]}
//         text3={sectionTextParts[2]}
//       />
     

//     </section>
//   );
// }


import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';
import './styles/Header.css'; // Adjust the path as necessary

export default function Header() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const headerData = useSelector(state => state.sections.header);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get('http://localhost:7777/homePage/getData/header');
        // const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/header');
        dispatch(setSectionData({ sectionName: 'header', data: response.data }));
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching header data:', error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchHeaderData();
  }, [dispatch]);

  console.log('Header data from Redux:', headerData);

  if (loading || !headerData || !headerData.sectionText) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    ); // Display the spinner while loading
  }

  const sectionTextParts = headerData.sectionText.split(';');

  return (
    <section id="Header" className="scroll-section">
      <HeaderComponent
        mediaVideo={headerData.sectionMediaUrl[0]} 
        mediaImage={headerData.sectionMediaUrl[1]} 
        text1={sectionTextParts[0]}
        text2={sectionTextParts[1]}
        text3={sectionTextParts[2]}
      />
    </section>
  );
}
