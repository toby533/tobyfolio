import React, { useState, useEffect } from 'react';
import FixedName from  './FixedName/FixedName';
import Welcome from './Welcome/Welcome';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experiences';

import { PortfolioProvider } from '../context/context';

import { heroData, projectsData, experiencesData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setProjects([...projectsData]);
    setExperiences({ ...experiencesData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider className="row" value={{ hero, projects, experiences, contact, footer }}>
      <FixedName />
      <Welcome />
      <Projects />
      <Hero />
      <Experiences />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
