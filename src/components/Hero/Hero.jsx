import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';
import Title from '../Title/Title';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { text } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <div className="section-title-container">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px"><Title title="About me" className="section-title"/></Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px"><div className="section-title-hr"></div></Fade>
      </div>
      <p className="hero-text">{text}</p>
    </section>
  );
};

export default Hero;
