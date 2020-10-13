import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <section id="welcome">
      <Container>
        <p className="welcome-text">Hi and welcome to my portfolio</p>
        <p className="welcome-little-text fr">Bonjour et bienvenue sur mon portfolio</p>
      </Container>
    </section>
  );
};

export default Welcome;