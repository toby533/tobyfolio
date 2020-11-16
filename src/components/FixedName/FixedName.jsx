import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const FixedName = () => {

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
    <div className="FixedName">
      <Fade left={isDesktop} top={isMobile} duration={500} delay={500} distance="50px">
        <p id="thibault">
            <span>Thibault</span>
        </p>
      </Fade>
      <Fade right={isDesktop} bottom={isMobile} duration={500} delay={500} distance="50px">
        <p id="drevon">
			<span>Drevon</span>
		</p>
      </Fade>
    </div>
  );
};

export default FixedName;