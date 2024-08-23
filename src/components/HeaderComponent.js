import React from 'react';
import header_down_arrow from '../assests/Images/header_down_arrow.png';
import './styles/HeaderComponent.css';

export default function HeaderComponent(props) {

    // const {mediaVideo, mediaImage, text1, text2, text3} = props
    const {mediaImageDesktop, mediaImage, text1, text2, text3} = props;


 
    // const isVideoBlob = mediaVideo && mediaVideo instanceof Blob && mediaVideo.type.startsWith('video/');

    const handleScroll = () => {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    };


  return (
    <header className="header d-flex justify-content-center align-items-center">
        <div className="container-fluid p-0 m-0 header-video-container">
        //   {isVideoBlob ? (
        //   // Attempt to use createObjectURL for local video file
        //   <video autoPlay muted loop className="header-video d-none d-sm-flex">
        //     <source src={URL.createObjectURL(mediaVideo)} type="video/mp4" />
        //     Your browser does not support the video tag.
        //   </video>
        // ) : ( // Fallback for non-video Blob or URL
        //   mediaVideo ? ( // If mediaVideo is a URL, use it directly
        //     <video autoPlay muted loop className="header-video d-none d-sm-flex">
        //       <source src={mediaVideo} type="video/mp4" />
        //       Your browser does not support the video tag.
        //     </video>
        //   ) : (
        //     // Display a placeholder (e.g., an image) if no video is available
        //     <div className="header-video d-none d-sm-flex">
        //       {/* Placeholder content */}
        //     </div>
        //   )
        // )}

    <div className="header-image d-none d-sm-flex ">
            <img src={mediaImageDesktop} className="img-fluid p-0 m-0" alt="Our Mission/Photo by 500photos.com: https://www.pexels.com/photo/tower-crane-during-daytime-93400/" />
          </div>
      
          <div className="header-image d-sm-none">
            <img src={mediaImage} className="img-fluid p-0 m-0" alt="Our Mission/Photo by 500photos.com: https://www.pexels.com/photo/tower-crane-during-daytime-93400/" />
          </div>
        </div>
        <div className="header-content container px-sm-2 px-md-3 d-flex justify-content-center align-items-md-center flex-column">
          <h1 className='' style={{textShadow:'0 0 2px black'}}>{text1}</h1>
          <h2 style={{textShadow:'0 0 2px black'}}>{text2}</h2>
          <h2 className='pb-4' style={{textShadow:'0 0 2px black'}}><span>{text3}</span></h2>
          <div className="header-down-arrow pt-5 d-flex justify-content-center" >
            <img src={header_down_arrow} alt="Down arrow" onClick={handleScroll} />
          </div>
        </div>
      </header>
  )
}
