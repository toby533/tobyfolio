import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:18;
  margin-bottom:0px;
  padding:0px;
    li {
      padding: 24px 24px;
      cursor: pointer;
    }
    li a {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;


const Navbar = () => {

  return (
    <Container>
      <div className="Navbar">
        <p className="name-navbar">Thibault Drevon</p>
        <Ul>
        <li><Link to="projects" smooth duration={1000}>Work</Link></li>
          <li><Link to="hero" smooth duration={1000}>About</Link></li>
          <li><Link to="/" smooth duration={1000}>CV</Link></li>
          <li><a target="_blank" rel="noopener noreferrer" href={`mailto:thibault.drevon@gmail.com`}/></li>
        </Ul>
      </div>
    </Container>
  )
}

export default Navbar