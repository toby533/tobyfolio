import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
      <div>
        <div className={navbar ? 'navbar active' : 'navbar'}>
          <div className="navbar-left">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <span className="dot"></span>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
              <p className="status-text">Status : <br/> OPEN TO WORK</p>
            </Fade>
          </div>
          <div className="navbar-right">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="50px"><Link to="contact" smooth duration={1500}>Contact</Link></Fade>
          </div>
        </div>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
          </span>
      </div>
  );
};

export default Navbar;
