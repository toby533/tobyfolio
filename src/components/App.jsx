import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import SvgComponent from './LogoAnimation/LogoAnimation';
import ScrollingBanner from './ScrollingBanner/ScrollingBanner';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

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
    <PortfolioProvider value={{ hero, projects, contact, footer }}>
      <Navbar />
      <SvgComponent />
      <Hero />
      <ScrollingBanner />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
