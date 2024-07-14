import React,{useEffect,useState} from 'react';
// import header_mobile from '../../assests/Images/HomePage/header_mobile.jpg';
// import mobView from '../../assests/Images/HomePage/mobView.jpg';
// import header_bg_vid_1 from '../../assests/Videos/header_bg_vid_1.mp4';
// import header_bg_vid_4 from '../../assests/Videos/header_bg_vid_4.mp4';
// import header_down_arrow from '../../assests/Images/header_down_arrow.png';
// import './styles/Header.css';
import HeaderComponent from '../../components/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';

export default function Header() {

  // const t1='LEADERS IN QUALITY'
  // const t2='CONSTRUCTION AND'
  // const t3='INFRASTRUCTURE'

  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const headerData = useSelector(state => state.sections.header);
  console.log('Header data from Redux:', headerData);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/header');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/header');
        console.log(response.data, "hihi")
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        console.log('API response:', 111);
        dispatch(setSectionData({ sectionName: 'header', data: response.data }));
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching header data:', error);
        // Handle error state or retries here
      }
    };

    fetchHeaderData();
  }, [dispatch]);

  console.log('Header data from Redux:', headerData);

  // Ensure headerData and sectionText are defined before accessing
  if (loading || !headerData || !headerData.sectionText) {
    return <div>Loading...</div>; // Or render a loading spinner or placeholder
  }

  const sectionTextParts = headerData.sectionText.split(';');

  return (
    <section id="Header" className="scroll-section">
      {/* <header className="header d-flex justify-content-center align-items-center">
        <div className="container-fluid p-0 m-0 header-video-container">
          <video autoPlay muted loop className="header-video d-none d-md-flex">
            <source src={header_bg_vid_4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="header-image d-md-none">
            <img src={header_mobile} className="img-fluid p-0 m-0" alt="Our Mission" />
          </div>
        </div>
        <div className="header-content container px-sm-2 px-md-3 d-flex justify-content-center align-items-md-center flex-column">
          <h1>LEADERS IN QUALITY</h1>
          <h2>CONSTRUCTION AND</h2>
          <h2 className="pb-4"><span>INFRASTRUCTURE</span></h2>
          <div className="header-down-arrow pt-5 d-flex justify-content-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <img src={header_down_arrow} alt="Down arrow" />
          </div>
        </div>
      </header> */}

      <HeaderComponent
        mediaVideo={headerData.sectionMediaUrl[0]} //header_bg_vid_4 //video
        mediaImage={headerData.sectionMediaUrl[1]} //mobView //image
        text1={sectionTextParts[0]}
        text2={sectionTextParts[1]}
        text3={sectionTextParts[2]}
      />
        {/* <HeaderComponent mediaVideo={headerData.sectionMedia[0]} mediaImage={headerData.sectionMedia[1]} text1={headerData.sectionText.split(';')[0]} text2={headerData.sectionText.split(';')[1]} text3={headerData.sectionText.split(';')[2]} /> */}

    </section>
  );
}
