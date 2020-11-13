import React, { useState, useEffect } from 'react';
import openToWork from '../../images/openToWork.png'
import Fade from 'react-reveal/Fade';
import Dot from '../Dot/Dot';

const Welcome = () => {

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
    <section id="welcome">
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="50px">
        <h1 className="name-text">Thibault <br/> Drevon</h1>
      </Fade>
      <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="50px">
        <div className="openToWork-container">
          <img className='openToWork-img' src={openToWork} alt="Open To Work"/>
        </div>
      </Fade>
      <div className="job-container">
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="50px">
        <div className="job">
          <Dot/><p>Product designer</p>
        </div>
        </Fade>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={700} distance="50px">
        <div className="job">
          <Dot/><p>Front developer</p>
        </div>
        </Fade>
      </div>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="50px"><p className="baseline-text">I create website, application and design assets.</p></Fade>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="50px"><p className="localization-text">Based in Paris, France.</p></Fade>
    </section>
  );
};

export default Welcome;