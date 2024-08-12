import React from 'react';
import Header from './Header';
import OurMission from './OurMission';
import Navigation from '../../components/Navigation';
import AboutUs from './AboutUs'
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Projects from './Projects';
import Counter from '../../components/Counter';
import { Helmet } from 'react-helmet';

export default function Home() {

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
    },
    "sameAs": [
      "https://www.linkedin.com/company/buildwellconstruction",
      "https://www.facebook.com/buildwellconstruction"
    ]
  }
  

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet> 
      <Navigation />
      <Header />
      <OurMission />
      <AboutUs />
      <Counter />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}
