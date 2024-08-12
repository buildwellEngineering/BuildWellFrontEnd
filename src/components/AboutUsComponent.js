

import React from 'react';
import './styles/AboutUsComponent.css';
import { Link } from 'react-router-dom';

export default function AboutUsComponent(props) {
  const { media, text } = props;

  // Function to split text and replace keyword with link
  const renderTextWithLink = (text) => {
    if (!text) return '';
    const keyword = "Explore our projects";
    const parts = text.split(keyword);

    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index !== parts.length - 1 && (
              <Link className="text-primary text-decoration-none" to="/allProjects" >
                {keyword}
              </Link>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div id="AboutUs" className="scroll-section p-0">
      <section className="about-us py-lg-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 d-lg-none">
              <img src={media} className="img-fluid" alt="About Us" />
            </div>
            <div className="col-12 col-lg-6 px-lg-5 offset-lg-6 py-sm-3 py-5">
              <h1 className="about-us-title" style={{ fontSize: '2.5rem', color: '#00365E' }}>ABOUT US</h1>
              <div className="aboutUsLine mb-5"></div>
              <p className="mt-3 fw-light">
                {renderTextWithLink(text)}
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"></div>
          </div>
        </div>
        <div className="background-image" style={{ backgroundImage: `url(${media})` }}></div>
      </section>
    </div>
  );
}
