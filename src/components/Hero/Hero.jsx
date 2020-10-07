import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { titleSection, firstName, lastName, title_en, title_fr, text_en, text_fr } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <div className="section-title-container">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px"><div className="section-title-hr"></div></Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1200} distance="30px"><p className="section-title">{titleSection}</p></Fade>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-name">{firstName}<br/>{lastName}</p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-title-en">
            {title_en}
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-title-fr">
            {title_fr}
          </p>
        </Fade>
        <div className="hero-text-container">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-text en">
              {text_en}
            </p>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-text fr">
              {text_fr}
            </p>
          </Fade>
        </div>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="section-superTitle">
            <span>Career</span>
          </div>
        </Fade>
        <ul className="hero-experience-list">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <li>
              <p className="hero-experience-date">2020</p>
              <div className="hero-experience-text">
                <p className="hero-experience-p en">Nicecactus company • the first all-in-one esports plateform.</p>
                <p className="hero-experience-p fr">Nicecactus • la première plateform pour s'entrainer, s'améliorer et se confronter avec les meilleurs joueurs.</p>
              </div>
            </li>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <li>
              <p className="hero-experience-date">2019</p>
              <div className="hero-experience-text">
                <div>
                  <p className="hero-experience-p en">Glory4gamers • The leader plateform for online esports tournaments.</p>
                  <p className="hero-experience-p fr">Glory4gamers • La meilleure plateforme de tournoi en ligne sur les jeux esports du moment.</p>
                </div>
                <div>
                  <p className="hero-experience-p en">DXC Technology • End-to-end IT services and solutions company</p>
                  <p className="hero-experience-p fr">DXC Technology • Société de services et solutions informatiques clés en main</p>
                </div>
              </div>
            </li>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <li>
              <p className="hero-experience-date">2018</p>
              <div className="hero-experience-text">
                <div>
                  <p className="hero-experience-p en">ECV digital school • Master degree in marketing & ergonomic design</p>
                  <p className="hero-experience-p fr">ECV digital school • Master en marketing & design d'interface</p>
                </div>
                <div>
                  <p className="hero-experience-p en">Société Général Insurances • innovation team - IT service</p>
                  <p className="hero-experience-p fr">Société Général Assurances • équipe innovation - service informatique</p>
                </div>
              </div>
            </li>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <li>
              <p className="hero-experience-date">2017</p>
              <div className="hero-experience-text">
                <p className="hero-experience-p en">Société Général Insurances • innovation team - IT service</p>
                <p className="hero-experience-p fr">Société Général Assurances • équipe innovation - service informatique</p>
              </div>
            </li>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <li>
              <p className="hero-experience-date">2016</p>
              <div className="hero-experience-text">
                <div>
                  <p className="hero-experience-p en">#SUPDEWEB digital school • Bachelor degree in web development & design</p>
                  <p className="hero-experience-p fr">#SUPDEWEB digital school • Bachelor en développement web & design</p>
                </div>
                <div>
                  <p className="hero-experience-p en">Société Général Insurances • innovation team - IT service</p>
                  <p className="hero-experience-p fr">Société Général Assurances • équipe innovation - service informatique</p>
                </div>
              </div>
            </li>
          </Fade>
        </ul>
      </Container>
    </section>
  );
};

export default Header;
