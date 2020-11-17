import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby";

const Header = () => {

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
    <div id="Navbar">
      <Fade top={isDesktop} top={isMobile} duration={500} delay={500} distance="50px">
        <Logo/>
      </Fade>
      <hr/>
      <nav>
        <Link to="/" activeClassName="active">
          Work
        </Link>
        <Link to="/about/">
          About
        </Link>
      </nav>
      <hr/>
    </div>
  );
};

export default Header;