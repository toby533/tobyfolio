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
      </div>
      <hr />
      <nav>
        <Link to="/" activeClassName="active">
          Work
        </Link>
        <Link to="/skills/" activeClassName="active">
          Skills
        </Link>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;