import React from 'react';
import Counter from '../../components/Counter';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import AllProjects from './AllProjects';

export default function ProjectsAll() {
  return (
    <div>
      <AllProjects />
      <Counter />
      <ContactUs />
      <Footer />
    </div>
  )
}

