import React,{useEffect} from 'react';
import AboutUsComponent from '../../components/AboutUsComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';

export default function AboutUs() {

  const dispatch = useDispatch();
  const aboutUsData = useSelector(state => state.sections.aboutUs);
  console.log(aboutUsData)

  useEffect(() => {
    const fetchAboutUsData = async () => {
      console.log(12222)
      try {
        console.log('kkl')
        // const response = await axios.get('http://localhost:7777/homePage/getData/aboutUs');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/aboutUs');
       console.log(response)
        dispatch(setSectionData({ sectionName: 'aboutUs', data: response.data }));
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching about us data:', error);
        // Handle error state or retries here
      }
    };
    console.log(aboutUsData)
    // fetchAboutUsData();
    // if (!aboutUsData) {
    //   console.log('po234')
    //   fetchAboutUsData();
    // }
    fetchAboutUsData();
  }, []); // dispatch


  return (
    <div id="AboutUs" className="scroll-section">   
      <AboutUsComponent /*media={aboutUsData.mediaUrl}*/ media={aboutUsData.sectionMediaUrl} text={aboutUsData.sectionText} />
    </div>
  );
}
