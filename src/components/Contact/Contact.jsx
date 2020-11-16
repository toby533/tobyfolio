import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { text, email } = contact;

  return (
    <section id="contact">
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="contact-wrapper">
          <p>{text}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${email}`}
          >
            Contact me
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
