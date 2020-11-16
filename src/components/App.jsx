import React, { useState, useEffect } from 'react';
import FixedName from  './FixedName/FixedName';
import Welcome from './Welcome/Welcome';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider className="row" value={{ hero, projects, contact, footer }}>
      <FixedName />
      <Welcome />
      <Projects />
      <Hero />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
