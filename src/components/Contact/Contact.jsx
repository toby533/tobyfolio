import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta_en, cta_fr, btn, email } = contact;

  return (
    <section id="contact">
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="contact-wrapper">
          <p>Get in touch</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${email}`}
          >
            thibault.drevon@gmail.com
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
