import React, { useContext, useState, useEffect } from 'react';
import SvgLogo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import window from 'global';

const Navbar = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const changeBackground = () => {
    if(window.scrollY >= 680) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
      <div id="fixed-item">
        <div className={navbar ? 'navbar active' : 'navbar'}>
          <div className="navbar-left">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <SvgLogo/>
            </Fade>
          </div>
          <div className="navbar-right">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="50px"><Link to="contact" smooth duration={1500}>Contact</Link></Fade>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
