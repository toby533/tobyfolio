import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:19;
  margin-bottom:0px;
  padding:0px;
  li {
    padding: 24px 24px;
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    li a {
      color: #fff !important;
      font-size: 2.4rem;
    }
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