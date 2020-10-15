import React, { useRef, useState, useEffect } from 'react';
import Burger from './Burger';
import SvgLogo from '../Logo/Logo';


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
    if(window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });


  return (
    <div className={navbar ? 'Nav active' : 'Nav'}>
      <SvgLogo/>
      <Burger />
    </div>
  )
}

export default Navbar