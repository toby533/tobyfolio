import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
  position: fixed;
  list-style: none;
  display: flex;
  z-index:19; 
  margin-bottom:0px;
  padding:0px;
  text-align:left;
  li {
    padding: 24px 24px;
    font-size: 1.8rem;
    cursor: pointer;
  }
  flex-flow: column nowrap;
  background-color: #F4F3F3;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
  top:0vh;
  right: 0;
  height: 100vh;
  width: 85%;
  padding-top: 10rem;
  transition: transform 0.3s ease-in-out;
  li a {
    color: #000 !important;
    font-size: 48px;
  }
`;

const RightNavbar = ({ open }) => {

    return (
    <Ul open={open}>
        <li><Link to="hero" smooth duration={1000}>About</Link></li>
        <li><Link to="projects" smooth duration={1000}>Work</Link></li>
        <li><Link to="contat" smooth duration={1000}>Contact</Link></li>
    </Ul>
  )
}

export default RightNavbar