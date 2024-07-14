import React,{useEffect} from 'react';
// import './styles/AboutUs.css';
//  import AboutUsImg from '../../assests/Images/AboutUs1.jpg';
// import aboutUs3 from '../../assests/Images/HomePage/aboutUs3.jpg';
import AboutUsComponent from '../../components/AboutUsComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setSectionData } from '../../store/slices/SectionsSLice';
import axios from 'axios';

export default function AboutUs() {

  // const firstPara = 'At BUILDWELL CONSTRUCTION, formerly known as OM CONSTRUCTION, we believe that every structure tells a story. Our story is one of passion, expertise, and a relentless pursuit of perfection. With over a decade of experience, we have evolved into a trusted name, recognized for delivering projects that stand the test of time.';

  // const secondPara = 'Being established in 2010, we pride ourselves on our unwavering commitment to quality and our promise of delivering utmost client satisfaction. Over the years, we have successfully completed a wide array of projects spanning across residential, commercial, institutional, and industrial sectors. Our proficiency in estimation, construction, design, architecture, project management, preconstruction, and finishing services ensures that our clients obtain a top-notch product at a reasonable and competitive cost, delivered within a realistic timeframe.';

  // const thirdPara = 'Thank you for considering us as your trusted partner in construction. Together, let\'s build a future that stands strong and inspires generations to come.';

  // const dispatch = useDispatch();
  // const aboutUsData = useSelector(state => state.sections.aboutUs);

  // useEffect(() => {
  //   const fetchAboutUsData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:7777/homePage/getData');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await response.json();
  //       console.log(data)
  //       dispatch(setSectionData({ sectionName: data.sectionName, data: data.sectionText }));
  //     } catch (error) {
  //       console.error('Error fetching about us data:', error);
  //       // Handle error state or retries here
  //     }
  //   };


  //   fetchAboutUsData();
  // }, [dispatch]);

  const dispatch = useDispatch();
  const aboutUsData = useSelector(state => state.sections.aboutUs);

  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        // const response = await axios.get('http://localhost:7777/homePage/getData/aboutUs');
        const response = await axios.get('https://buildwell-engineering.vercel.app/homePage/getData/aboutUs');
        // console.log(response.data)
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        // console.log('API response:', 111);
        dispatch(setSectionData({ sectionName: 'aboutUs', data: response.data }));
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching about us data:', error);
        // Handle error state or retries here
      }
    };

    fetchAboutUsData();
  }, [dispatch]);


  return (
    <div id="AboutUs" className="scroll-section">
      <>
      {/* <section className="about-us py-lg-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 d-lg-none">
              <img src={AboutUsImg} className="img-fluid" alt="About Us" />
            </div>
            <div className="col-12 col-lg-6 px-xl-5 offset-lg-6 py-sm-3 py-5">
              <h1 className="about-us-title">ABOUT US</h1>
              <div className="aboutUsLine mb-5"></div>
              <p className="mt-3 fw-light">
                {firstPara}<br /><br />
                {secondPara}<br /><br />
                {thirdPara}
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"></div>
          </div>
        </div>
      </section> */}
      </>
      {
        // console.log(aboutUsData.sectionText)
      }
      <AboutUsComponent /*media={aboutUsData.mediaUrl}*/ media={aboutUsData.sectionMediaUrl} text={aboutUsData.sectionText} />
    </div>
  );
}
