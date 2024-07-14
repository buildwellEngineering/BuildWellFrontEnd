import React,{useEffect} from 'react';
import Counter from '../../components/Counter';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import DisplayProjects from './DisplayProjects';

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div>
          <DisplayProjects />
          <Counter />
          <ContactUs />
          <Footer />
        </div>
      )
}
