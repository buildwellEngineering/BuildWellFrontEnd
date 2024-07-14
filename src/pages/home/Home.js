import React from 'react';
import Header from './Header';
import OurMission from './OurMission';
import Navigation from '../../components/Navigation';
import AboutUs from './AboutUs'
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';
import Projects from './Projects';
import Counter from '../../components/Counter';

export default function Home() {
  return (
    <div>
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
