import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function ScrollingBanner (props) {
  return (
    <section id="scrollingBanner">
        <p className="scrollingBanner-text">what i'm design to make</p>
        <div className="scroll-text">
            <span>INTERFACE DESIGN - BRANDING - EXPERIENCE DESIGN - TEST AND LEARN - PANEL TESTING - WEBSITE CREATION -</span>
            <span>INTERFACE DESIGN - BRANDING - EXPERIENCE DESIGN - TEST AND LEARN - PANEL TESTING - WEBSITE CREATION</span>
        </div>
    </section>
  );
}

export default ScrollingBanner;
