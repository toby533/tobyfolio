import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';

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
    <div id="welcome">
      <Fade top={isDesktop} top={isMobile} duration={500} delay={500} distance="50px">
        <Logo/>
      </Fade>
      <ul>
          <li>
              Work
          </li>
          <li>
              About
          </li>
      </ul>
      <Fade bottom={isDesktop} bottom={isMobile} duration={500} delay={600} distance="50px">
        <hr/>
      </Fade>
    </div>
  );
};

export default Welcome;