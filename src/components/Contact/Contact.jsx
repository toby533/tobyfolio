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
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text en">
              {cta_en}
            </p>
            <p className="contact-wrapper__text fr">
              {cta_fr}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;