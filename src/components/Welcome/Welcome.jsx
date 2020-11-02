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
        <p className="welcome-text">I'm a designer who create user centric digital tools</p>
        <hr className="hr-welcome"/>
        <p className="welcome-text-little">I do prototype design, brand content and user focus workshop.</p>
        <p className="welcome-text-little bold">Currently <span className="span-green">i’m open to work</span>.</p>
      </Container>
    </section>
  );
};

export default Welcome;