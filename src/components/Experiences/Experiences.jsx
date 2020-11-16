import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Experiences = () => {

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
    <section id="experiences">
      <div className="section-title-container">
        <Title title="Experiences" className="section-title"/>
        <div className="section-title-hr"></div>
      </div>
    </section>
  );
};

export default Experiences;
