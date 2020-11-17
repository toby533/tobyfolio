import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby";

const Navbar = () => {
  
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
      <div className="top-nav">
        <Logo />
        <div className="contact"></div>
      </div>
      <nav>
        <Link to="/" activeClassName="active">
          Work
        </Link>
        <Link to="/Skills/">
          Skills
        </Link>
        <Link to="/about/">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;