import React,{useEffect} from 'react';
import Counter from '../../components/Counter';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import DisplayProjects from './DisplayProjects';
import { Helmet } from 'react-helmet';

export default function AllProjects() {

  const schemaMarkup  = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://buildwellengineering.com/allProjects",
    "name": "Our All Projects - BuildWell Construction",
    "description": "Explore the diverse range of residential, commercial, institutional, and industrial projects completed by BuildWell Construction."
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div>
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        </Helmet>
          <DisplayProjects />
          <Counter />
          <ContactUs />
          <Footer />
        </div>
      )
}
